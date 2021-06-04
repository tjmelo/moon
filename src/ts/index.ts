declare var require: any;
const api: any = require('./api')
const avatar = require('./avatar');
const {
    inputName, 
    buttonResearch, 
    resultResearch,
    resultAvatar
} = require('./utils')

let requestName: Promise<Response>

buttonResearch.addEventListener('click', (e:any):void => {
    e.preventDefault();
    for( let item of resultResearch) item.textContent = '';
    resultAvatar.removeAttribute('src');
    resultResearch[0].textContent = `Waiting research...`;

    requestName = api.api.get(`?name=${inputName.value}`)
        .then((e:any) => e.data)

    requestName
        .then((a:any): any => {
            let arr: string[] = 
            [ 
                a.name,
                a.gender,
                `${(a.probability * 100).toFixed(1)}%`,
                a.count,
            ]
            
            let image: string = (a.gender === 'female') 
                                ? `w${avatar.avatar()}`
                                : `m${avatar.avatar()}`;

            setTimeout(() => {
                resultResearch.forEach((el:Element, idx: number) => 
                    el.textContent = arr[idx] )
                    resultAvatar.setAttribute(
                        'src', `../public/avatar/${image}.png`
                    );
            }, 1000);

        })
})