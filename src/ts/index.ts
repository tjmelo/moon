declare var require: any;
const api: any = require('./api')
const avatar = require('./avatar');
const {
    inputName, 
    buttonResearch, 
    resultResearch,
    resultAvatar
} = require('./utils')

let requestName: Promise<any>

buttonResearch.addEventListener('click', async(e:any) => {
    e.preventDefault();
    for( let item of resultResearch) item.textContent = '';
    resultAvatar.removeAttribute('src');
    resultResearch[0].textContent = `Waiting research...`;

    requestName = await api.api.get(`?name=${inputName.value}`)
    let data = await requestName;
    let result = await data;
    
    let arr: string[] = 
    [ 
        result.name,
        result.gender,
        `${(result.probresbility * 100).toFixed(1)}%`,
        result.count,
    ]
    
    let image: string = (result.gender === 'female') 
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