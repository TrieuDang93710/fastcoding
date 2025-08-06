import url from '../constant.js'
import renderProjectSlide from '../js/project_slide.js';
import renderProjectCard from '../js/project_render.js';

export function fetchProject() {
    fetch(`${url}/projects`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let projs = data.data;
            let index = 0;
            renderProjectSlide(projs, index);
            renderProjectCard(projs);
        })
        .catch(function (err) {
            console.log(err);
        })
}