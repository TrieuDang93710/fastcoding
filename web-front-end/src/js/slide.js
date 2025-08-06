const sectionSlide = document.getElementById('section_slide');

export default function renderSlide(newses, index) {
    let html = `
            <div class="_flex section__banner" style="width: 80%;">
                    <div class="_flex banner__content">
                        <div class="_flex content__top">
                            <h1 class="h1">${newses[index].title}</h1>
                        </div>
                        <div style="
                            width: 50%;
                            background-color: var(--gray-50);
                            padding: 10px 30px;
                            border-radius: 4.0px;
                            margin-bottom: 10px;
                        ">
                            <p class="p-middle">“${newses[index].content}”</p>
                            <p class="p-middle"><strong>${newses[index].create_by}</strong> CEO of Coca ColA</p>
                        </div>
                        <div class="_flex" style="
                            --flex-direction: row;
                            gap: 10px;
                        ">
                            <div id="dec" class="_flex button" style="
                                --flex-direction: row;
                                --outline: none;
                            ">
                                <i class="ph ph-caret-left" style="
                                    --icon-background-color: var(--gray-50);
                                    --icon-color: var(--primary-500);
                                    --icon-padding: 8px
                                "></i>
                            </div>

                            <div id="inc"  class="_flex button" style="
                                --flex-direction: row;
                                --outline: none;
                            ">
                                <i class="ph ph-caret-right" style="
                                    --icon-background-color: var(--primary-500);
                                    --icon-color: var(--gray-white);
                                    --icon-padding: 8px
                                "></i>
                            </div>
                        </div>
                    </div>
                    <img src="${newses[index].image}" alt="">
                </div>
            `;
            
    if (sectionSlide) {
        sectionSlide.innerHTML = html
    }

    const decButton = document.getElementById('dec');
    const incButton = document.getElementById('inc');

    if (decButton && incButton) {
        decButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
                renderSlide(newses, index);
            } else {
                index = 0;
                renderSlide(newses, index);
            }
        });

        incButton.addEventListener('click', () => {
            if (index < newses.length - 1) {
                index++;
                renderSlide(newses, index);
            }
        });
    }
}