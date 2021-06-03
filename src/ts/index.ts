declare var require: any;
const api: any = require('./api')

const inputName = 
    document.querySelector('.inputName') as HTMLInputElement;

const buttonResearch = 
    document.querySelector('.inputResearch') as HTMLButtonElement;

const resultResearch = 
    document.querySelectorAll('.result');


let requestName: Promise<Response>

buttonResearch.addEventListener('click', e => {
    e.preventDefault();

    requestName = api.api.get(`?name=${inputName.value}`)
        .then((e:any) => e.data)

    requestName
        .then((a:any): any => {
            let arr: string[] = 
            [ 
                a.name,
                a.gender,
                a.probability,
                a.count
            ]

            setTimeout(() => {
                resultResearch.forEach((el, idx) => {
                    el.textContent = arr[idx]
                })
            }, 3000);

        })
})