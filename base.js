AFRAME .registerComponent("Bases",{
    schema:{
       radius:{type:'number', default:150},
       height:{type:'number', default:3}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveX = this.data.moveX+0.01;
        })},
    init:function(){
    this.el.setAttribute("geometry",{
        primitive:"cylinder",
        radius:this.data.radius,
        height:this.data.height
    });
    this.el.setAttribute("material",{color:"#1769aa"})
    }
})