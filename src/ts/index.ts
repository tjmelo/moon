declare var require: any;
const api: any = require('./api')
const {
    inputName, 
    buttonResearch, 
    resultResearch
} = require('./utils')

let requestName: Promise<Response>

buttonResearch.addEventListener('click', (e:any) => {
    e.preventDefault();
    for( let item of resultResearch) item.textContent = ''
    resultResearch[0].textContent = `Waiting research...`

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
                resultResearch.forEach((el:Element, idx: number) => 
                    el.textContent = arr[idx] )
            }, 1000);

        })
})