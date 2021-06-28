module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/_config.scss";
                    @import "@/assets/scss/_variables.scss";
                    @import url('https://fonts.googleapis.com/css2?family=Quicksand');
                    `
            }
        }
    }
};