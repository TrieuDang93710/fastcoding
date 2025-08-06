export default function renderProjectCard(projs) {
    console.log(projs);
    let htmlsc = projs.map(function (proj) {
        return `
            <div class="_flex study__item" style="
                background-image: url('${proj.image}');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            ">

                <div class="_flex icon-left">
                    <i class="ph-fill ph-caret-left"></i>
                </div>
                <div class="_flex icon-right">
                    <i class="ph-fill ph-caret-right"></i>
                </div>
                <div class="proj_card_modal"></div>
            </div>
        `;
    });

    let htmlc = htmlsc.join('');
    const projectGroup = document.getElementById('project_group');
    projectGroup.innerHTML = htmlc;
}