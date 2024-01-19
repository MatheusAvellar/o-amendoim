const markdownIt = require("markdown-it");
const markdownItNamedHeadings = require("markdown-it-named-headings");
/* Markdown Overrides */
const markdownRenderer = markdownIt({
	html: true,
	breaks: false,
	linkify: true
}).use(markdownItNamedHeadings);

module.exports = function(eleventyConfig) {
	eleventyConfig.setLibrary("md", markdownRenderer);

	eleventyConfig.addPassthroughCopy("CNAME");
	// [Ref] https://github.com/11ty/eleventy/issues/2461#issuecomment-1238279042
	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.png");
	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.jpg");
	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.pdf");
	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.svg");

	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.css");
	eleventyConfig.addPassthroughCopy("{,!(_site|node_modules)/**/}*.js");

	eleventyConfig.addCollection("posts", collection => {
		return collection.getFilteredByGlob("_posts/*.md")
			.sort((a, b) => b.date - a.date);
	});
	eleventyConfig.addCollection("nav_pages", collection => {
		return collection.getFilteredByGlob("*.ejs").filter(p => {
			return p?.data?.header;
		});
	});
	eleventyConfig.addCollection("extras", collection => {
		return collection.getFilteredByGlob("extra/*.md");
	});

	fallback = function(obj, key, if_false="") {
		if(!(key in obj)) return if_false;
		const val = obj[key];
		if(typeof val === "undefined"
			|| val === null
			|| (typeof val === "number" && isNaN(val)))
			return if_false;

		if("dont_show" in obj && [obj.dont_show].flat().includes(key))
			return if_false;

		return (typeof val === "string" ? val.trim() : val);
	}

	dateify = (date) => {
		if(date instanceof Date)
			return date;
		if(!date)
			return null;
		return new Date(`${date}T00:00Z`);
	};
	formatDate = (date, circa, short) => {
		const d = dateify(date);
		if(!d) return "S.d.";

		const ye = new Intl.DateTimeFormat("pt-br", { year: "numeric", timeZone: "UTC" }).format(d);
		const mo = new Intl.DateTimeFormat("pt-br", { month: "long", timeZone: "UTC" }).format(d);
		const m  = new Intl.DateTimeFormat("pt-br", { month: "short", timeZone: "UTC" }).format(d);
		const da = new Intl.DateTimeFormat("pt-br", { day: "numeric", timeZone: "UTC" }).format(d);

		const count = (date instanceof Date) ? 2 : (typeof date === "number" ? 0 : 1);
		if(!circa) {
			if(count >= 2)
				return (!short ? `${da} de ${mo} de ${ye}` : `${da} ${m}${ye}`);
			if(count === 1)
				return (!short ? `${titleCase(mo)} de ${ye}` : `${titleCase(m)}${ye}`);
			return `${ye}`;
		} else {
			if(count >= 2)
				return (!short ? `Circa ${da} de ${mo} de ${ye}` : `c. ${da} ${m}${ye}`);
			if(count === 1)
				return (!short ? `Circa ${mo} de ${ye}` : `c. ${m}${ye}`);
			return `c.${ye}`;
		}
	};
	formatDateC = (obj) => {
		return formatDate(obj?.date, obj?.circa, obj?.short);
	};
	formatDateURL = (date) => {
		const d = dateify(date);
		if(!d) return "sem-data";
		const year = (d.getFullYear()+"").padStart(2, 0);
		const month = (d.getMonth()+1+"").padStart(2, 0);
		const day = (d.getDate()+"").padStart(2, 0);
		return `${year}/${month}/${day}`
	};
	getYearFromDate = (date, circa) => {
		const d = dateify(date);
		if(!d) return "S.d.";
		// Se é só ano e aproximado, então "c.XXXX"
		if(typeof date === "number" && circa)
			return "c." + d.getUTCFullYear();
		// Caso contrário, o ano é conhecido, então só "XXXX"
		return d.getUTCFullYear();
	};
	getMonthFromDate = (date, circa) => {
		const d = dateify(date);
		if(!d) return "S.d.";
		// Se é só ano e aproximado, então "c.XXXX"
		if(circa)
			return "c." + d.getUTCMonth();
		// Caso contrário, o ano é conhecido, então só "XXXX"
		return d.getUTCMonth();
	};

	return {
		markdownTemplateEngine: "ejs"
	}
};
