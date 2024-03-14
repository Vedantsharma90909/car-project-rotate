// Registering component in log-component.js
AFRAME.registerComponent('base', {
    schema: {
      radius: {type: 'number', default:20},
      height: {type: 'number', default:3}
    },
    init: function () {
        this.el.setAttribute("geometry",{
          primitive:"cylinder",
          radius:this.data.radius,
          height:this.data.height
        })
        this.el.setAttribute("material",{color:"grey"})
      }
  });


AFRAME.registerComponent('car', {
    schema: {
        rotation_x:{type:"number", default:0},
        rotation_y:{type:"number", default:90},
        rotation_z:{type:"number", default:0},
        scale_x:{type:"number", default:2},
        scale_y:{type:"number", default:2},
        scale_z:{type:"number", default:2},
        
    },
    tick:function(){
      this.el.setAttribute("rotation",{x:this.data.rotation_x,y:this.data.rotation_y,z:this.data.rotation_z})
    },
    init: function () {
      window.addEventListener("click",e=> {
        this.data.rotation_y = this.data.rotation_y+90

    })
        this.el.setAttribute("rotation",{
          x:this.data.rotation_x,
          y:this.data.rotation_y,
          z:this.data.rotation_z
        })
        this.el.setAttribute("scale",{
            x:this.data.scale_x,
            y:this.data.scale_y,
            z:this.data.scale_z
        })
      }
  });

