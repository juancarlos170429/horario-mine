const horas=["DIAS","7:00-8:00 am","8:00-9:00 am","9:00-10:00 am","10:00-11:00 am","11:00-12:00 pm","12:00-1:00 pm","1:00-2:00 pm","2:00-3:00 pm","3:00-4:00 pm","4:00-5:00 pm","5:00-6:00 pm","6:00-7:00 pm","7:00-8:00 pm","8:00-9:00 pm","9:00-10:00 pm","10:00-11:00 pm"]
const usuario=[
    {
        user:"170429",
        password:"73880073",
        name:"Juan Carlos"
    }
]
const cursosLunes=[
    {
        hora:"7:00-8:00 am",
        curso:"(1)Redes 2/seminario de investigacion",
        link:"https://meet.google.com/yak-xfvs-edd?authuser=0"
    },
    {
        hora:"9:00-10:00 am",
        curso:"(2)seminario de investigacio/Redes 2",
        link:"https://meet.google.com/fis-nzej-tjd?authuser=0"
    },
    {hora:"--------------",curso:"Robotica",link:"https://meet.google.com/vmr-ckwy-mwe?authuser=0&hs=179"},
    {hora:"--------------",curso:"Robotica",link:"https://meet.google.com/vmr-ckwy-mwe?authuser=0&hs=179"},
    {hora:"--------------",curso:"Formulacion de proyectos",link:"https://meet.google.com/vzq-fwho-bbv?authuser=0"}
    ,{hora:"--------------",curso:"Formulacion de proyectos",link:"https://meet.google.com/vzq-fwho-bbv?authuser=0"}
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    ,{hora:"--------------",curso:"Libre",link:""},{hora:"--------------",curso:"Libre",link:""}
]
const cursosMartes=[
    {
        hora:"7:00-8:00 am",
        curso:"Mineria de datos",
        link:"https://meet.google.com/gzi-edsh-uik"
    },
    {
        hora:"9:00-10:00 am",
        curso:"Mineria de datos",
        link:"https://meet.google.com/gzi-edsh-uik"
    },{hora:"--------------",curso:"Topicos de Ing",link:"https://meet.google.com/hns-gezb-uwa"},
    {hora:"--------------",curso:"Topicos de Ing",link:"https://meet.google.com/hns-gezb-uwa"},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""}
]
const cursosMiercoles=[
    {
        hora:"7:00-8:00 am",
        curso:"(1)Redes 2/seminario de investigacion",
        link:"https://meet.google.com/yak-xfvs-edd?authuser=0"
    },
    {
        hora:"9:00-10:00 am",
        curso:"(2)seminario de investigacio/Redes 2",
        link:"https://meet.google.com/fis-nzej-tjd?authuser=0"
    },{hora:"--------------",curso:"Robotica",link:"https://meet.google.com/vmr-ckwy-mwe?authuser=0&hs=179"},
    {hora:"--------------",curso:"Robotica",link:"https://meet.google.com/vmr-ckwy-mwe?authuser=0&hs=179"},
    {hora:"--------------",curso:"Formulacion de proyectos",link:"https://meet.google.com/vzq-fwho-bbv?authuser=0"}
    ,{hora:"--------------",curso:"Formulacion de proyectos",link:"https://meet.google.com/vzq-fwho-bbv?authuser=0"}
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""}
]
const cursosJueves=[
    {
        hora:"7:00-8:00 am",
        curso:"Mineria de datos",
        link:"https://meet.google.com/gzi-edsh-uik"
    },
    {
        hora:"9:00-10:00 am",
        curso:"Mineria de datos",
        link:"https://meet.google.com/gzi-edsh-uik"
    },{hora:"--------------",curso:"Topicos de Ing",link:"https://meet.google.com/hns-gezb-uwa"},
    {hora:"--------------",curso:"Topicos de Ing",link:"https://meet.google.com/hns-gezb-uwa"},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Grafica II",link:"https://meet.google.com/kpq-mayj-dai?authuser=0"},
    {hora:"--------------",curso:"Grafica II",link:"https://meet.google.com/kpq-mayj-dai?authuser=0"},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"SCRUM BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"SCRUM BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"SCRUM BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""}
]
const cursosViernes =[
    {
        hora:"7:00-8:00 am",
        curso:"Redes 2",
        link:"https://meet.google.com/yak-xfvs-edd?authuser=0"
    },
    {
        hora:"9:00-10:00 am",
        curso:"Mineria de datos",
        link:"https://meet.google.com/gzi-edsh-uik"
    },{hora:"--------------",curso:"Robotica",link:"https://meet.google.com/vmr-ckwy-mwe?authuser=0&hs=179"},
    {hora:"--------------",curso:"Topicos de Ing",link:"https://meet.google.com/hns-gezb-uwa"}  ,
    {hora:"--------------",curso:"Libre",link:""}
    ,{hora:"--------------",curso:"Libre",link:""}
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    {hora:"--------------",curso:"BOOTCAMP",link:"https://meet.google.com/mwn-eiku-mmi?hs=224"},
    ,{hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""}
]
const cursosSabado=[
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Grafica II",link:"https://meet.google.com/kpq-mayj-dai?authuser=0"},
    {hora:"--------------",curso:"Grafica II",link:"https://meet.google.com/kpq-mayj-dai?authuser=0"},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""},
    {hora:"--------------",curso:"Libre",link:""}
]
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
export{horas,cursosLunes,cursosMartes,cursosMiercoles,cursosJueves,cursosViernes,meses,cursosSabado,usuario}