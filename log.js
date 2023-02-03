var logg = [
    (info)=>{

        console.log('info:' + info);
    },
    (warning) => {
        console.log('warning:' + warning);
    },
    (erro) => {
        console.log('erro:' + erro);
    }
];
module.exports = logg;