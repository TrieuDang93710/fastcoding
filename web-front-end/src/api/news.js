import renderSlide from "../js/slide.js";
import url from '../constant.js'

export function fetchNews() {
    fetch(`${url}/news`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let newses = data.data;
            let index = 0;
            renderSlide(newses, index);
        })
        .catch(function (err) {
            console.log(err);
        })
}