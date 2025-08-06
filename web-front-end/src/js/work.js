
export function innerHTMLEducation() {
    const education = [
        {
            id: 1,
            title: 'Website Design Course',
            content: 'Bachelor\'s Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.',
            time: '2021 - Present',
            at: 'UK'
        },
        {
            id: 2,
            title: 'Bachelor of Philosophy (B. Phil.)',
            content: 'Coursework - Git, WordPress, Javascript, iOS, Android, appleos and macos.',
            time: '2016 - 2019',
            at: 'Cambridge University'
        },
        {
            id: 3,
            title: 'Bachelor of Engineering (B. Eng.)',
            content: 'Bachelor\'s Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.',
            time: '2010 - 2014',
            at: 'Oxford University'
        },
    ];

    let htmls = education.map(function (edu) {
        return `
    <div class="_flex" style="
                    --flex-direction: column;
                    --align-items: start; 
                    --justify-content: center;
                    gap: 10px;
                ">
                    <div class="_flex content__top" style="
                    --flex-direction: column;
                    --align-items: start; 
                    --justify-content: center;
                    gap: 10px;
                ">
                        <p class="p-top" style="color: var(--primary-500)">${edu.time} • ${edu.at}</p>
                        <h1 class="h1">${edu.title}</h1>
                    </div>
                    <p class="p-middle" style="color: var(--gray-500)">${edu.content}</p>
                </div>
    `;
    });

    let html = htmls.join('');

    if (document.getElementById('education')) {
        document.getElementById('education').innerHTML = html;
    }
}

export function innerHTMLHistory() {
    const history = [
        {
            id: 1,
            title: 'Team Lead of UI/UX Designer',
            content: 'Collaborate with creative and development teams on the execution of ideas.',
            time: '2019 - Present',
            at: 'Google'
        },
        {
            id: 2,
            title: 'Senior UI/UX Designer',
            content: 'Monitored technical aspects of the front-end delivery for projects.',
            time: '2016 - 2019',
            at: 'Apple'
        },
        {
            id: 3,
            title: 'Bachelor of Engineering (B. Eng.)',
            content: 'Bachelor\'s Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.',
            time: '2010 - 2014',
            at: 'Oxford University'
        },
    ];

    let htmls = history.map(function (his) {
        return `
        <div class="_flex" style="
                    --flex-direction: column;
                    --align-items: start; 
                    --justify-content: center;
                    gap: 10px;
                ">
                    <div class="_flex content__top" style="
                    --flex-direction: column;
                    --align-items: start; 
                    --justify-content: center;
                    gap: 10px;
                ">
                        <p class="p-top" style="color: var(--danger-500)">${his.time} • ${his.at}</p>
                        <h1 class="h1">${his.title}</h1>
                    </div>
                    <p class="p-middle" style="color: var(--gray-500)">${his.content}</p>
                </div>
        `;
    });
    let html = htmls.join('');
    if (document.getElementById('history')) {
        document.getElementById('history').innerHTML = html;
    }
}