const cheerio = require('cheerio');
const axios = require('axios');
const state = require('./read_write.js');

const fetchData = async(url) => {
    const result = await axios.get(url)
    return result.data
}

function company(){
    Company = '',
    VAL = [{
      'D.Y' : '',
      'P/L' : '',
      'EV/EBITDA/L' : '',
      'P/VP' : '',
      'EV/EBIT' : '',
      'P/EBITDA' : '',
      'P/EBIT' : '',
      'VPA' : '',
      'P/ATIVO' : '',
      'LPA' : '',
      'P/SR' : '',
      'P/CAR.GIRO' : '',
      'P/ATIVO CRIC.LIQ' : ''
    }];
    END = [{
        'DIV.LUQUIDA/PL' : '',
        'DIV.LIQ/EBTIDA' : '',
        'PL/ATIVOS' : '',
        'PASSIVOS/ATIVOS' : '',
        'LIQ.CORRENTE' : ''
    }];
    EFI = [{
        'M.BRUTA' : '',
        'M.EBTIDA' : '',
        'M.EBIT' : '',
        'M.LIQUIDA' : ''
    }];
    REN = [{
        'ROE' : '',
        'ROA' : '',
        'ROIC' : '',
        'GIRO ATIVOS' : '',
    }];
    CRE = [{
        'CARG.RECEIT.5ANOS' : '',
        'CARG.LUCRO.5ANOS' : '',
    }];
}

// companies that will be scraped
let companyName = [
                    'ABEV3'
                    ,'ALUP11'
                    ,'AMAR3'
                    ,'ANDG3B'
                    ,'ANIM3'
                    ,'ARZZ3'
                    ,'ATMP3'
                    ,'AVLL3'
                    ,'AZEV3'
                    ,'AZEV4'
                    ,'AZUL4'
                    ,'B3SA3'
                    ,'BALM3'
                    ,'BBAS3'
                    ,'BBDC3'
                    ,'BBDC4'
                    ,'BBRK3'
                    ,'BBSE3'
                    ,'BDLL3'
                    ,'BDLL4'
                    ,'BEEF11'
                    ,'BEEF3'
                    ,'BIDI11'
                    ,'BIDI3'
                    ,'BIDI4'
                    ,'BKBR3'
                    ,'BMIN3'
                    ,'BMIN4'
                    ,'BMKS3'
                    ,'BOBR4'
                    ,'BPAC11'
                    ,'BPAC5'
                    ,'BPAN4'
                    ,'BRAP4'
                    ,'BRDT3'
                    ,'BRFS3'
                    ,'BRGE11'
                    ,'BRGE3'
                    ,'BRGE5'
                    ,'BRGE6'
                    ,'BRGE8'
                    ,'BRIV3'
                    ,'BRIV4'
                    ,'BRKM3'
                    ,'BRKM5'
                    ,'BRKM6'
                    ,'BRML3'
                    ,'BRPR3'
                    ,'BSLI3'
                    ,'BSLI4'
                    ,'BTOW3'
                    ,'BTTL3'
                    ,'CALI3'
                    ,'CAMB3'
                    ,'CASH3'
                    ,'CCRO3'
                    ,'CCXC3'
                    ,'CEAB3'
                    ,'CEBR3'
                    ,'CEBR5'
                    ,'CEBR6'
                    ,'CEDO4'
                    ,'CEEB3'
                    ,'CEEB5'
                    ,'CEGR3'
                    ,'CIEL3'
                    ,'COGN3'
                    ,'CPFE3'
                    ,'CRFB3'
                    ,'CRPG5'
                    ,'CSAN3'
                    ,'CSNA3'
                    ,'CVCB3'
                    ,'CYRE3'
                    ,'DIRR3'
                    ,'ECOR3'
                    ,'EGIE3'
                    ,'ELET3'
                    ,'ELET6'
                    ,'EMAE4'
                    ,'EMBR3'
                    ,'ENJU3'
                    ,'ENMA3B'
                    ,'EQPA3'
                    ,'EQPA5'
                    ,'EQTL3'
                    ,'EUCA3'
                    ,'EZTC3'
                    ,'FESA3'
                    ,'FESA4'
                    ,'FHER3'
                    ,'FLRY3'
                    ,'FRAS3'
                    ,'GBIO33'
                    ,'GEPA3'
                    ,'GEPA4'
                    ,'GGBR3'
                    ,'GGBR4'
                    ,'GNDI3'
                    ,'GOAU4'
                    ,'GOLL4'
                    ,'GRND3'
                    ,'GUAR3'
                    ,'HAPV3'
                    ,'HETA4'
                    ,'HGTX3'
                    ,'HYPE3'
                    ,'IDVL3'
                    ,'IDVL4'
                    ,'IGBR3'
                    ,'IGTA3'
                    ,'INEP3'
                    ,'INEP4'
                    ,'IRBR3'
                    ,'ITSA3'
                    ,'ITSA4'
                    ,'ITUB3'
                    ,'ITUB4'
                    ,'JBDU3'
                    ,'JBDU4'
                    ,'JBSS3'
                    ,'JFEN3'
                    ,'JHSF3'
                    ,'KLBN11'
                    ,'LAME4'
                    ,'LOGN3'
                    ,'LPSB3'
                    ,'LREN3'
                    ,'LTEL3B'
                    ,'LUPA3'
                    ,'LUXM4'
                    ,'LWSA3'
                    ,'MDIA3'
                    ,'MDNE3'
                    ,'MEAL3'
                    ,'MELK3'
                    ,'MERC3'
                    ,'MGLU3'
                    ,'MILS3'
                    ,'MOVI3'
                    ,'MRFG3'
                    ,'MRSA5B'
                    ,'MRVE3'
                    ,'MSPA3'
                    ,'MSPA4'
                    ,'MSRO3'
                    ,'MTIG4'
                    ,'MTRE3'
                    ,'MTSA4'
                    ,'MULT3'
                    ,'MWET3'
                    ,'MWET4'
                    ,'NAFG4'
                    ,'NTCO3'
                    ,'PCAR3'
                    ,'PETR3'
                    ,'PETR4'
                    ,'PRIO3'
                    ,'QUAL3'
                    ,'RADL3'
                    ,'RAIL3'
                    ,'REDE3'
                    ,'RENT3'
                    ,'RSID3'
                    ,'RSUL4'
                    ,'SANB11'
                    ,'SBSP3'
                    ,'SMTO3'
                    ,'SQIA3'
                    ,'SULA11'
                    ,'SULA3'
                    ,'SUZB3'
                    ,'TAEE11'
                    ,'TAEE3'
                    ,'TASA3'
                    ,'TASA4'
                    ,'TCNO3'
                    ,'TCSA3'
                    ,'TIET3'
                    ,'TIET4'
                    ,'TIMS3'
                    ,'TOTS3'
                    ,'UGPA3'
                    ,'USIM5'
                    ,'VALE3'
                    ,'VIVT4'
                    ,'VVAR3'
                    ,'WEGE3'
                   
                    ];

let companies = [];
let values = [];

const main = async () => {
    for(let i = 0; i <= companyName.length-1; i++){

        const content = await fetchData('https://statusinvest.com.br/acoes/'+companyName[i]);
        const $ = cheerio.load(content);

        $('.today-historical-container > div > div > div > div > div').each((i, e) => {
            const valor = $(e).find('div > strong').text();
            values.push(valor);
        });

        let company1 = new company();
        company1.Company = companyName[i]
        let VAL = [{
          'D.Y' : values[0],
          'P/L' : values[1],
          'EV/EBITDA/L' : values[2],
          'P/VP' : values[3],
          'EV/EBIT' : values[4],
          'P/EBITDA' : values[5],
          'P/EBIT' : values[6],
          'VPA' : values[7],
          'P/ATIVO' : values[8],
          'LPA' : values[9],
          'P/SR' : values[10],
          'P/CAR.GIRO' : values[11],
          'P/ATIVO CRIC.LIQ' : values[12]
        }]
        let END = [{
            'DIV.LUQUIDA/PL' : values[13],
            'DIV.LIQ/EBTIDA' : values[14],
            'DIV.LIQ/EBIT' : values[15],
            'PL/ATIVOS' : values[16],
            'PASSIVOS/ATIVOS' : values[17],
            'LIQ.CORRENTE' : values[18]
        }]
        let EFI = [{
            'M.BRUTA' : values[19],
            'M.EBTIDA' : values[20],
            'M.EBIT' : values[21],
            'M.LIQUIDA' : values[22]
        }]
        let REN = [{
            'ROE' : values[23],
            'ROA' : values[24],
            'ROIC' : values[25],
            'GIRO ATIVOS' : values[26],
        }]
        let CRE = [{
            'CARG.RECEIT.5ANOS' : values[27],
            'CARG.LUCRO.5ANOS' : values[28],
        }]

        company1.VAL = VAL;
        company1.END= END;
        company1.EFI = EFI;
        company1.REN = REN;
        company1.CRE = CRE;

        companies.push(company1);
        values = [];
    }

    state.save(companies, './companies.json');

}

main();
