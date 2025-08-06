const projectSlide = document.getElementById('project_slide');

export default function renderProjectSlide(projs, index) {
    let html = `
            <div class="_flex content__middle" style="
                background-image: url('${projs[index].image}');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            ">
                <div class="_flex button" style="
                            width: 10%;
                            --flex-direction: row;
                            --background-color: var(--gray-600);
                            --border-radius: 4.0;
                            --outline: 1px solid var(--gray-white);
                            z-index: 10;
                    ">
                    <p style="
                                --color: var(--gray-white);

                        ">${projs[index].category}</p>
                </div>
                <div class="_flex content__top" style="
                                --flex-direction: column;
                                --align-items: center; 
                                --justify-content: start;
                                gap: 10px;
                                z-index: 10;
                            ">
                    <h1 class="h1" style="font-size: 32px; color: var(--gray-white);">${projs[index].title}</h1>
                    <p class="p-middle" style="color: var(--gray-100); width: 40%; text-align: center;">${projs[index].description}</p>
                </div>
                <div class="_flex button" style="
                            --flex-direction: row;
                            --background-color: var(--gray-500);
                            --border-radius: 4.0;
                            --outline: 1px solid var(--gray-white);
                            z-index: 10;
                    ">
                    <p style="
                                --color: var(--gray-white);
                        ">Case study</p>
                </div>
                <div id="dec" class="_flex icon-left">
                    <i class="ph-fill ph-caret-left"></i>
                </div>
                <div id="inc" class="_flex icon-right">
                    <i class="ph-fill ph-caret-right"></i>
                </div>
                <div class="project_modal"></div>
            </div>
            `;

    if (projectSlide) {
        projectSlide.innerHTML = html
    }

    const decButton = document.getElementById('dec');
    const incButton = document.getElementById('inc');

    if (decButton && incButton) {
        decButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
                renderProjectSlide(projs, index);
            } else {
                index = 0;
                renderProjectSlide(projs, index);
            }
        });

        incButton.addEventListener('click', () => {
            if (index < projs.length - 1) {
                index++;
                renderProjectSlide(projs, index);
            }
        });
    }
}