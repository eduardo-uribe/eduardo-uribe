// The common front-matter data for all of the files in the 'posts' directory are abstracted into 'posts.11tydata.js' file so that we don't need to manually repeat them on every file.
module.exports = function() {
    return {
        tags: "entries",
        author: "Eduardo Uribe",
        css: ["post-header.css", "postpage.css", "gray-syntax.css"],
        layout: "layouts/post.html"
    };
};