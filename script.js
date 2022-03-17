function segiEmpat(sisi){
    return sisi * 4
}
console.log(segiEmpat(6))

class gitar{
    static jmlSenar = 6
    constructor(merk,bahan,jmlFret,genre){
        this.merk = merk
        this.bahanKayu = bahan 
        this.jmlFret = jmlFret
        
        
    }
    

    deskripsi(){
        console.log(`gitar ini merek ${this.merk}, berbahan dasar ${this.bahanKayu}, memiliki ${this.jmlFret} fret,dan  ${gitar.jmlSenar} Senar`)
    }
    bunyi(){
        console.log(`gitar ${this.merk} memiliki bunyi yang enak`)
    }
}
const yamaha = new gitar('YAMAHA','kayu Jati',22)
yamaha.deskripsi()
yamaha.bunyi()

class gitarListrik extends gitar{
    constructor(merk,bahan,jmlFret,pickUp){
        super(merk,bahan,jmlFret)
        this.pickUp = pickUp
        
    }
    deskripsi(){
        super.deskripsi()
        console.log(`memiliki pick up ${this.pickUp}`)
    }
    bunyi(){
        console.log(`gitar ${this.merk} memiliki bunyi ynag keras`)
    }
}
const fender = new gitarListrik('fender','poplar',24,'single coil')
fender.deskripsi()
fender.bunyi()
