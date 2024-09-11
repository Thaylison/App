const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L  de água por dia',
    checked: false,
}

let metas = [ meta ];

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" });

    if( meta.length == 0 ){
        console.log("A meta não pode ser vazia.");
        return;
    }

    metas.push({ value: meta, checked: false });
}

const start = async () => { // sempre que utilizar o await, a função tem que ser async

    while(true ) {
       
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "lsitar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        }) // await significa que vai aguardar o usuário escolher a opção

        switch(opcao){
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas);
                break;
            case "listar":
                console.log("vamos listar");
                break;
            case "sair":
                console.log("até a proxima!");
                return;
        }
    }
}

start();