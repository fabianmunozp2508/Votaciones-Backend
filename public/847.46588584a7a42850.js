"use strict";(self.webpackChunkfmunozpuello=self.webpackChunkfmunozpuello||[]).push([[847],{6847:(X,_,s)=>{s.r(_),s.d(_,{ChildRoutesModule:()=>H});var d=s(1022),f=s(4004),v=s(2340),t=s(1223),x=s(520);const l=v.N.base_url;let h=(()=>{class i{constructor(e,o,r){this.http=e,this.router=o,this.ngZone=r,this.fotos=[]}get token(){return localStorage.getItem("token")||""}get headers(){return{headers:{"x-token":this.token}}}get role(){return this.usuario.role}get uid(){return this.usuario.uid||""}get publicado(){return this.usuario.publicado}cargarImagenes(){return this.http.get(`${l}/social`,this.headers).pipe((0,f.U)(o=>o.image))}post(e){return this.http.post(`${l}/social/imagenes`,e,this.headers)}subirpost(e){return this.http.post(`${l}/social`,e,this.headers)}cargarpostId(){return this.http.get(`${l}/social/imagenes/usuario/`,this.headers).pipe((0,f.U)(o=>o.image))}borrarfoto(e){return this.http.delete(`${l}/social/imagenes/${e}`,this.headers)}actualizarfoto(e,o){return this.http.put(`${l}/social/imagenes/usuario${e}`,{publicado:o},this.headers)}cargarpostById(e){return this.http.get(`${l}/social/imagenes/usuario/${e}`,this.headers).pipe((0,f.U)(r=>r.image))}like(e){return this.http.post(`${l}/social/imagenes/like/${e}`,{uid:e},this.headers)}cargarvotes(e){return this.http.post(`${l}/social/imagenes/usuario/voto/${e}`,{uid:e},this.headers)}Publicado(e){return this.http.patch(`${l}/social/imagenes/usuario/publicar/${e}`,this.headers)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x.eN),t.LFG(d.F0),t.LFG(t.R0b))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var m=s(8737),q=s(5226),c=s.n(q),u=s(2382),g=s(9808);function C(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return r.votacion(r.usuario.uid)})("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().vote(r._id)}),t._uU(1,"Votar"),t.qZA()}}function U(i,n){1&i&&(t.TgZ(0,"p",19),t._uU(1,"Usted ya ha votado"),t.qZA())}const y=function(i){return{nomostrar:i}};function O(i,n){if(1&i&&(t.TgZ(0,"div",8),t.TgZ(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div",11),t.TgZ(4,"h5",12),t._uU(5),t.qZA(),t.TgZ(6,"p",13),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.TgZ(10,"label",14),t._uU(11,"Votos"),t.qZA(),t.qZA(),t.TgZ(12,"div",15),t.YNc(13,C,2,0,"button",16),t.YNc(14,U,2,0,"p",17),t.qZA(),t.qZA()),2&i){const e=n.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(7,y,!e.publicado)),t.xp6(2),t.MGl("src","../assets/uploads/post/",e.filename,"",t.LSH),t.xp6(3),t.Oqu(e.usuario.nombre),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.hij("",e.vote," "),t.xp6(4),t.Q6J("ngIf",!o.votaciones),t.xp6(1),t.Q6J("ngIf",o.votaciones)}}let I=(()=>{class i{constructor(e,o,r,a){this.usuarioService=e,this.fotoServices=o,this.fb=r,this.router=a,this.mostrarImagen="",this.myDate=new Date,this.votaciones=!1,this.cargando=!0,this.cantidadPost=!0,this.solo2=!0,this.archivos=[],this.Image2=[],this.usuario=e.usuario}ngOnInit(){this.votoForm=this.fb.group({voto:!0,publicado:!0,uid:this.usuario.uid}),this.ImagenesUser(),this.anularvoton()}ImagenesUser(){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarImagenes().subscribe(e=>{let o=Object.values(e);for(let r=0;r<o.length;r++)!0===o[r].publicado?console.log("puedes publicar"+o):console.log("No puedes publicar"),this.Image2=e})}like(e){this.fotoServices.like(e).subscribe(o=>{c().fire("Like")})}vote(e){const o=this.usuario.voto;this.fotoServices.cargarvotes(e).subscribe(r=>{1==o?c().fire({icon:"success",title:"Gracias por su vote",showConfirmButton:!1}):(c().fire({title:"Usted ya ha votado",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),this.router.navigateByUrl("http://localhost:4200/dashboard"))})}votar(e){this.usuarioService.cargarVoto(e).subscribe(o=>{console.log(o)})}anularvoton(){1==this.usuario.voto&&(this.votaciones=!0)}votacion(e){this.usuarioService.VotarNulo(e).subscribe(o=>{this.ImagenesUser()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.i),t.Y36(h),t.Y36(u.qu),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:11,vars:1,consts:[[1,"pe-lg-3","mb-7"],[1,"display-3","text-white","mb-3","mb-md-5"],[1,"text-danger"],["data-hs-typed-options",'{\n                "strings": ["team.", "startup.", "business."],\n                "typeSpeed": 90,\n                "loop": true,\n                "backSpeed": 30,\n                "backDelay": 2500\n              }',1,"js-typedjs","text-center"],[1,"text-center","title"],[1,"lead","text-white-70","text-center","contenido"],[1,"container","d-flex","align-items-center","justify-content-center","position-relative","flex-wrap"],["class","card d-flex position-relative flex-column",3,"ngClass",4,"ngFor","ngForOf"],[1,"card","d-flex","position-relative","flex-column",3,"ngClass"],[1,"imgContainer"],[3,"src"],[1,"content"],[1,"autor","text-center","fw-bold","text-capitalize"],[1,"title"],[1,"fw-bold"],[1,"d-grid","gap-2"],["class","btn btn-primary m-4","type","submit",3,"click",4,"ngIf"],["class","text-danger text-center fw-bold","type","text",4,"ngIf"],["type","submit",1,"btn","btn-primary","m-4",3,"click"],["type","text",1,"text-danger","text-center","fw-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t.TgZ(2,"h1",1),t.TgZ(3,"span",2),t.TgZ(4,"span",3),t.TgZ(5,"p",4),t._uU(6,"Galeria de imagenes seleccionadas."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"Imagenes que han sido seleccionadas para el concurso."),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,O,15,9,"div",7),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("ngForOf",o.Image2))},directives:[g.sg,g.mk,g.O5],styles:[".title[_ngcontent-%COMP%]{text-align:justify}.container[_ngcontent-%COMP%]{width:100%;max-width:1600px;margin:0 auto;margin-bottom:1rem;padding:.5em}.author[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.avatar[_ngcontent-%COMP%]{width:30px;height:30px;overflow:hidden;border-radius:50%;margin-right:5px}.nomostrar[_ngcontent-%COMP%]{display:none!important}*[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Poppins,sans-serif}body[_ngcontent-%COMP%]{min-width:100vw;min-height:100vh;display:flex;justify-content:center;align-items:center;background:#16384c}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:300px;height:auto;margin:30px 10px;padding:20px 15px;box-shadow:0 5px 20px #00000080;transition:.3s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{height:450px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]{position:relative;width:250px;height:250px;top:-50px;left:10px;z-index:1;box-shadow:0 5px 20px #0003}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:4px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;margin-top:-140px;padding:10px 15px;text-align:center;color:#111;visibility:hidden;opacity:0;pointer-events:none;transition:.3s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]{visibility:visible;opacity:1;margin-top:-40px;transition-delay:.3s}@media (max-width: 330px){.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]{left:-2px}}"]}),i})(),w=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-contact"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"contact works!"),t.qZA())},styles:[""]}),i})();function M(i,n){1&i&&(t.TgZ(0,"span",21),t._UZ(1,"i",22),t._uU(2,"\xa0Cargar Fotograf\xedas"),t.qZA())}function F(i,n){1&i&&(t.TgZ(0,"p",23),t._uU(1," Limite de "),t.TgZ(2,"em"),t._uU(3,"Fotografia"),t.qZA(),t._uU(4," alcanzado."),t.qZA())}function P(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",24),t.TgZ(1,"div",25),t._UZ(2,"img",26),t.TgZ(3,"div",27),t.TgZ(4,"h5",28),t._uU(5),t.qZA(),t.TgZ(6,"p",29),t._uU(7),t.qZA(),t.TgZ(8,"button",30),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().borrarFoto(a._id)}),t._uU(9," Borrar Imagen "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(2),t.MGl("src","../assets/uploads/post/",e.filename,"",t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description)}}let S=(()=>{class i{constructor(e,o,r){this.usuarioService=e,this.fotoServices=o,this.router=r,this.cargando=!0,this.cantidadPost=!0,this.solo2=!0,this.Image2=[],this.usuario=e.usuario}ngOnInit(){this.ImagenesUser()}ImagenesUser(){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarpostId().subscribe(e=>{0==e.length?this.cantidadPost=!1:e.length>=2&&(this.solo2=!1),this.cargando=!1,this.Image2=e})}borrarFoto(e){c().fire({title:"\xbfBorrar Foto?",text:`Esta a punto de borrar a ${e}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, borrarlo"}).then(o=>{o.value&&this.fotoServices.borrarfoto(e).subscribe(r=>{this.ImagenesUser(),c().fire("Fotografia Borrada"," fue eliminado correctamente","success"),this.router.navigateByUrl("/dashboard/aboutme")})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.i),t.Y36(h),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-aboutme"]],decls:35,vars:11,consts:[[1,"container","rounded","bg-white","mt-5","mb-5"],[1,"row"],[1,"col-md-3","border-right"],[1,"d-flex","flex-column","align-items-center","text-center","p-3","py-5"],["width","150px",1,"rounded-circle","mt-5",3,"src"],[1,"font-weight-bold"],[1,"text-black-50"],[1,"col","border-right"],[1,"p-3","py-5"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-right"],[1,"row","mt-2"],[1,"col-md-6"],[1,"labels"],["type","text","value","",1,"form-control",3,"placeholder"],[1,"d-flex","justify-content-between","align-items-center","experience","p-5"],["class","border px-3 p-1 add-experience","routerLink","/dashboard/cargarFotos",4,"ngIf"],[1,"textoMensaje"],["class","textoMensaje text-danger",4,"ngIf"],[1,"container","p-3"],["class","col",4,"ngFor","ngForOf"],["routerLink","/dashboard/cargarFotos",1,"border","px-3","p-1","add-experience"],[1,"fa","fa-plus"],[1,"textoMensaje","text-danger"],[1,"col"],[1,"card",2,"width","18rem"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["data-toggle","tooltip","data-original-title","Borrar",1,"cursor","btn","btn-danger","m-2",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"span",5),t._uU(6),t.qZA(),t.TgZ(7,"span",6),t._uU(8),t.qZA(),t._UZ(9,"span"),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"div",9),t.TgZ(13,"h4",10),t._uU(14,"Profile Settings"),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"label",13),t._uU(18,"Nombres"),t.qZA(),t._UZ(19,"input",14),t.qZA(),t.qZA(),t.TgZ(20,"div",15),t.TgZ(21,"span"),t._uU(22,"Mis Fotograf\xedas"),t.qZA(),t.YNc(23,M,3,0,"span",16),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"p",17),t._uU(26," Solo se permiten dos "),t.TgZ(27,"em"),t._uU(28,"Fotografias"),t.qZA(),t._uU(29," por persona."),t.qZA(),t.YNc(30,F,5,0,"p",18),t.TgZ(31,"div",19),t.TgZ(32,"div",1),t.YNc(33,P,10,3,"div",20),t.ALo(34,"slice"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.s9C("src",o.usuario.img,t.LSH),t.xp6(2),t.Oqu(o.usuario.nombre),t.xp6(2),t.Oqu(o.usuario.email),t.xp6(11),t.s9C("placeholder",o.usuario.nombre),t.xp6(4),t.Q6J("ngIf",o.solo2),t.xp6(7),t.Q6J("ngIf",!o.solo2),t.xp6(3),t.Q6J("ngForOf",t.Dn7(34,7,o.Image2,0,2)))},directives:[g.O5,d.rH,g.sg],pipes:[g.OU],styles:["body[_ngcontent-%COMP%]{background:rgb(99,39,120)}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#ba68c8}.profile-button[_ngcontent-%COMP%]{background:rgb(99,39,120);box-shadow:none;border:none}.profile-button[_ngcontent-%COMP%]:hover{background:#682773}.profile-button[_ngcontent-%COMP%]:focus{background:#682773;box-shadow:none}.profile-button[_ngcontent-%COMP%]:active{background:#682773;box-shadow:none}.back[_ngcontent-%COMP%]:hover{color:#682773;cursor:pointer}.labels[_ngcontent-%COMP%]{font-size:11px}.add-experience[_ngcontent-%COMP%]:hover{background:#BA68C8;color:#fff;cursor:pointer;border:solid 1px #BA68C8}.textoMensaje[_ngcontent-%COMP%]{font-size:16px}"]}),i})();var k=s(5861),B=s(2313);let N=(()=>{class i{constructor(e,o,r,a,p){var Q=this;this.usuarioService=e,this.fb=o,this.fotoServices=r,this.sanitizer=a,this.router=p,this.cantidadPost=!0,this.cargando=!0,this.archivos=[],this.Image2=[],this.extraerBase64=function(){var V=(0,k.Z)(function*(Z){return new Promise((A,W)=>{try{const T=window.URL.createObjectURL(Z),b=(Q.sanitizer.bypassSecurityTrustUrl(T),new FileReader);b.readAsDataURL(Z),b.onload=()=>{A({base:b.result})},b.onerror=et=>{A({base:null})}}catch(T){return null}})});return function(Z){return V.apply(this,arguments)}}(),this.usuario=e.usuario}ngOnInit(){this.ImagenForm=this.fb.group({title:["",u.kI.required,u.kI.maxLength(50)],description:["",u.kI.required,u.kI.maxLength(258)],filename:["",u.kI.required],usuario:[this.usuario.uid]}),this.ImagenesUser()}capturarFile(e){const o=e.target.files[0];this.extraerBase64(o).then(r=>{this.previsualizacion=r.base}),this.archivos.push(o)}clearImage(){this.previsualizacion="",this.archivos=[]}subirArchivo(){const e=this.ImagenForm.value.title,o=this.ImagenForm.value.description;try{this.loading=!0;const a=new FormData;console.log(a),this.archivos.forEach(p=>{a.append("image",p),a.append("title",e),a.append("description",o)}),this.ImagenForm.markAllAsTouched(),this.fotoServices.post(a).subscribe(p=>{c().fire("Creado",`${e} creado correctamente`,"success"),this.router.navigateByUrl("/dashboard/aboutme")})}catch(a){this.loading=!1,console.log("ERROR",a)}}ImagenesUser(){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarpostId().subscribe(e=>{0==e.length?this.cantidadPost=!1:e.length>=2&&(c().fire({title:"Invalido",text:"Usted a cargado su limite maximo",icon:"question",showCancelButton:!0,confirmButtonText:"Regresar"}),this.router.navigateByUrl("/dashboard/aboutme")),this.cargando=!1,this.Image2=e,console.log(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.i),t.Y36(u.qu),t.Y36(h),t.Y36(B.H7),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cargarfotos"]],decls:39,vars:2,consts:[[1,"bg-primary-dark","position-relative","overflow-hidden","p-20"],[1,"container","content-space-2"],[1,"row","justify-content-center","align-items-lg-center"],[1,"col-md-8","col-lg-6","mb-7","mb-lg-0"],[1,"pe-lg-3","mb-7"],[1,"display-3","text-white","mb-3","mb-md-5"],[1,"text-danger"],["data-hs-typed-options",'{\n                      "strings": ["team.", "startup.", "business."],\n                      "typeSpeed": 90,\n                      "loop": true,\n                      "backSpeed": 30,\n                      "backDelay": 2500\n                    }',1,"js-typedjs"],[1,"lead","text-white-70","contenido"],[1,"row"],[1,"col-md-8","col-lg-6"],[1,"ps-lg-5"],[1,"card","card-lg"],[1,"card-body"],[1,"row","align-items-sm-center","mb-5"],[1,"col-sm-auto","order-sm-2","mb-3","mb-sm-0"],["src","./assets/img/logoVotaciones.png","alt","Image Description",1,"imagen"],[1,"col-sm"],[1,"card-title"],[1,"card-text"],[3,"formGroup","ngSubmit"],[1,"mb-4"],["for","Titulo",1,"form-label"],["type","text","name","title","formControlName","title","name","title","id","title","id","registerName","placeholder","Titulo de la imagen","aria-label","Type your name","required","","data-msg","Please enter your name.",1,"form-control","form-control-lg"],["for","descripcion",1,"form-label"],["type","text","formControlName","description","name","description","id","description","placeholder","Descrici\xf3n de la Imagen","aria-label","example@site.com","required","","data-msg","Please enter a valid email address.",1,"form-control","form-control-lg"],["id","file-input","formControlName","filename","name","filename","enctype","multipart/form-data","type","file",3,"change"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary","m-3",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h1",5),t.TgZ(6,"span",6),t.TgZ(7,"span",7),t._uU(8,"Cargar Imagen."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"p",8),t._uU(10,"Sube tus imagenes para participar el el consurso, recuerda que son maximo dos imagenes."),t.qZA(),t.qZA(),t._UZ(11,"div",9),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"div",11),t.TgZ(14,"div",12),t.TgZ(15,"div",13),t.TgZ(16,"div",14),t.TgZ(17,"div",15),t._UZ(18,"img",16),t.qZA(),t.TgZ(19,"div",17),t.TgZ(20,"h5",18),t._uU(21,"Participa"),t.qZA(),t.TgZ(22,"p",19),t._uU(23,"Solo fotografias de la ciudad."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"form",20),t.NdJ("ngSubmit",function(){return o.subirArchivo()}),t.TgZ(25,"div",21),t.TgZ(26,"label",22),t._uU(27,"Titulo de la imagen"),t.qZA(),t._UZ(28,"input",23),t.qZA(),t.TgZ(29,"div",21),t.TgZ(30,"label",24),t._uU(31,"Describe la imagen"),t.qZA(),t._UZ(32,"input",25),t.qZA(),t.TgZ(33,"div",21),t.TgZ(34,"div"),t.TgZ(35,"input",26),t.NdJ("change",function(a){return o.capturarFile(a)}),t.qZA(),t.qZA(),t.TgZ(36,"div",27),t.TgZ(37,"button",28),t._uU(38,"Subir imagen"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(24),t.Q6J("formGroup",o.ImagenForm),t.xp6(13),t.Q6J("disabled",o.ImagenForm.invalid))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.Q7],styles:['.uploadPhotos[_ngcontent-%COMP%]{padding:200 20 20 20}.contenido[_ngcontent-%COMP%]{font-size:20px;font-family:"Roboto Serif",sans-serif}.menu[_ngcontent-%COMP%]{font-size:12px;font-family:"Roboto Serif",sans-serif}img[_ngcontent-%COMP%]{height:120px}']}),i})();function Y(i,n){if(1&i&&(t.TgZ(0,"div",15),t._UZ(1,"img",16),t.TgZ(2,"span",17),t._uU(3),t.qZA(),t.TgZ(4,"span",18),t._uU(5),t.qZA(),t._UZ(6,"span"),t.qZA()),2&i){const e=n.$implicit;t.xp6(3),t.Oqu(e.usuario.nombre),t.xp6(2),t.Oqu(e.usuario.email)}}function $(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"div",20),t._UZ(2,"img",21),t.TgZ(3,"div",22),t.TgZ(4,"h5",23),t._uU(5),t.qZA(),t.TgZ(6,"p",24),t._uU(7),t.qZA(),t.TgZ(8,"button",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().borrarFoto(a._id)}),t._uU(9," Borrar Imagen "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(2),t.MGl("src","../assets/uploads/post/",e.filename,"",t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description)}}let D=(()=>{class i{constructor(e,o,r){this.usuarioService=e,this.fotoServices=o,this.router=r,this.cargando=!0,this.cantidadPost=!0,this.solo2=!0,this.Image2=[],this.Image3=[],this.usuario=e.usuario}ngOnInit(){}ImagenesUserId(e){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarpostById(e).subscribe(o=>{this.cargando=!1,this.Image3=o})}ImagenesUser(){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarpostId().subscribe(e=>{0==e.length?this.cantidadPost=!1:e.length>=2&&(this.solo2=!1),this.cargando=!1,this.Image2=e})}borrarFoto(e){c().fire({title:"\xbfBorrar Foto?",text:`Esta a punto de borrar a ${e}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, borrarlo"}).then(o=>{o.value&&this.fotoServices.borrarfoto(e).subscribe(r=>{this.ImagenesUser(),c().fire("Fotografia Borrada"," fue eliminado correctamente","success"),this.router.navigateByUrl("/dashboard/aboutme")})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.i),t.Y36(h),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-selecciones"]],inputs:{image:"image"},decls:22,vars:7,consts:[[1,"container","rounded","bg-white","mt-5","mb-5"],[1,"row"],[1,"col-md-3","border-right"],["class","d-flex flex-column align-items-center text-center p-3 py-5",4,"ngFor","ngForOf"],[1,"col","border-right"],[1,"p-3","py-5"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-right"],[1,"row","mt-2"],[1,"col-md-6"],[1,"labels"],["type","text","value","",1,"form-control",3,"placeholder"],[1,"d-flex","justify-content-between","align-items-center","experience","p-5"],[1,"container","p-3"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","align-items-center","text-center","p-3","py-5"],["width","150px","src","https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",1,"rounded-circle","mt-5"],[1,"font-weight-bold"],[1,"text-black-50"],[1,"col"],[1,"card",2,"width","18rem"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["data-toggle","tooltip","data-original-title","Borrar",1,"cursor","btn","btn-danger","m-2",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,Y,7,2,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"h4",7),t._uU(8,"Profile Settings"),t.qZA(),t.qZA(),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t.TgZ(11,"label",10),t._uU(12,"Nombres"),t.qZA(),t._UZ(13,"input",11),t.qZA(),t.qZA(),t.TgZ(14,"div",12),t.TgZ(15,"span"),t._uU(16,"Fotograf\xedas"),t.qZA(),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"div",13),t.TgZ(19,"div",1),t.YNc(20,$,10,3,"div",14),t.ALo(21,"slice"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.Image3),t.xp6(10),t.s9C("placeholder",o.usuario.nombre),t.xp6(7),t.Q6J("ngForOf",t.Dn7(21,3,o.Image2,0,2)))},directives:[g.sg],pipes:[g.OU],styles:["body[_ngcontent-%COMP%]{background:rgb(99,39,120)}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#ba68c8}.profile-button[_ngcontent-%COMP%]{background:rgb(99,39,120);box-shadow:none;border:none}.profile-button[_ngcontent-%COMP%]:hover{background:#682773}.profile-button[_ngcontent-%COMP%]:focus{background:#682773;box-shadow:none}.profile-button[_ngcontent-%COMP%]:active{background:#682773;box-shadow:none}.back[_ngcontent-%COMP%]:hover{color:#682773;cursor:pointer}.labels[_ngcontent-%COMP%]{font-size:11px}.add-experience[_ngcontent-%COMP%]:hover{background:#BA68C8;color:#fff;cursor:pointer;border:solid 1px #BA68C8}.textoMensaje[_ngcontent-%COMP%]{font-size:16px}"]}),i})(),j=(()=>{class i{constructor(e,o){this.usuarioService=e,this.router=o}canActivate(e,o){return"ADMIN_ROLE"===this.usuarioService.role||(c().fire("No esta Autorizado a esta ruta"),this.router.navigateByUrl("/dashboard"),!1)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.i),t.LFG(d.F0))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const J=v.N.base_url;let L=(()=>{class i{constructor(e){this.http=e}get token(){return localStorage.getItem("token")||""}get headers(){return{headers:{"x-token":this.token}}}transformarImagenes(e){return e}buscarResultados(e,o){return this.http.get(`${J}/buscar/coleccion/${e}/${o}`,this.headers).pipe((0,f.U)(a=>"imagenes"===e?this.transformarImagenes(a.resultados):[]))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function z(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",7),t.TgZ(3,"h4",8),t._uU(4,"Cargando"),t.qZA(),t._UZ(5,"i",9),t.TgZ(6,"p",10),t._uU(7,"Por favor espere"),t.qZA(),t.qZA(),t.qZA(),t.qZA())}function G(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tbody"),t.TgZ(1,"tr"),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",19),t.TgZ(9,"button",20),t._uU(10,"Ver fotos"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",21),t.TgZ(12,"div",22),t.TgZ(13,"div",23),t.TgZ(14,"div",24),t.TgZ(15,"h5",25),t._uU(16),t.qZA(),t._UZ(17,"button",26),t.qZA(),t.TgZ(18,"div",27),t.TgZ(19,"div",28),t._UZ(20,"img",29),t.TgZ(21,"div",3),t.TgZ(22,"h5",11),t._uU(23),t.qZA(),t.TgZ(24,"p",30),t._uU(25),t.qZA(),t.TgZ(26,"button",31),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).publicar(a._id)}),t._uU(27,"Publicar"),t.qZA(),t.TgZ(28,"a",32),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).borrarFoto(a._id)}),t._uU(29,"Eliminar foto"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",33),t.TgZ(31,"button",34),t._uU(32,"Cerrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(3),t.Oqu(e.usuario.nombre),t.xp6(2),t.Oqu(e.usuario.email),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.uIk("data-bs-target","#exampleModal"+e._id),t.xp6(2),t.MGl("id","exampleModal",e._id,""),t.xp6(5),t.Oqu(e.usuario.nombre),t.xp6(4),t.MGl("src","../assets/uploads/post/",e.filename,"",t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.hij("",e.description,".")}}function R(i,n){if(1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4",11),t._uU(5),t.qZA(),t.TgZ(6,"h6",12),t._uU(7,"Usuarios registrados en mi aplicaci\xf3n"),t.qZA(),t.TgZ(8,"div",13),t.TgZ(9,"table",14),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Correo"),t.qZA(),t.TgZ(16,"th",15),t._uU(17,"Imagenes"),t.qZA(),t.TgZ(18,"th",16),t._uU(19,"Acciones"),t.qZA(),t.qZA(),t.qZA(),t.YNc(20,G,33,9,"tbody",17),t.qZA(),t.qZA(),t.TgZ(21,"button",18),t._uU(22,"Anteriores"),t.qZA(),t._uU(23," \xa0 "),t.TgZ(24,"button",18),t._uU(25,"Siguientes"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(5),t.hij("Total de usuarios (",e.totalUsuarios,")"),t.xp6(15),t.Q6J("ngForOf",e.Image2)}}const E=[{path:"",component:I,data:{titulo:"Home"}},{path:"contact",component:w,data:{titulo:"Contact"}},{path:"cargarFotos",component:N,data:{titulo:"Contact"}},{path:"aboutme",component:S,data:{titulo:"About me"}},{path:"administracion",component:(()=>{class i{constructor(e,o,r,a){this.usuarioService=e,this.fotoServices=o,this.busquedaService=r,this.router=a,this.myDate=new Date,this.cargando=!0,this.cantidadPost=!0,this.solo2=!0,this.Image2=[],this.Image3=[],this.totalUsuarios=0,this.usuarios=[],this.usuariosTemp=[],this.desde=0,this.publicado=!1,this.usuario=e.usuario}ngOnInit(){this.ImagenesUser(),this.cargarUsuarios(),this.anularfoto()}ImagenesUser(){this.cargando=!0,this.cantidadPost=!0,this.fotoServices.cargarImagenes().subscribe(e=>{0==e.length?this.cantidadPost=!1:e.length>=2&&(this.solo2=!1),console.log(e),this.cargando=!1,this.Image2=e})}cargarUsuarios(){this.cargando=!0,this.usuarioService.cargarUsuarios(this.desde).subscribe(({total:e,usuarios:o})=>{this.totalUsuarios=e,this.usuarios=o,this.usuariosTemp=o,this.cargando=!1})}cambiarPagina(e){this.desde+=e,this.desde<0?this.desde=0:this.desde>=this.totalUsuarios&&(this.desde-=e),this.cargarUsuarios()}buscarUser(e){this.fotoServices.cargarpostById(e._id).subscribe(o=>{console.log(o),this.cargando=!1,this.Image3=o})}guardarCambios(e){this.fotoServices.actualizarfoto(e._id,e.publicado).subscribe(o=>{c().fire({title:"\xbfAprobar foto?",text:`Esta a punto de publicar la fotografia de  ${e.usuario.nombre}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, publicar"}),this.cargando=!1,this.Image3=o})}borrarFoto(e){c().fire({title:"\xbfBorrar Foto?",text:`Esta a punto de borrar a ${e}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, borrarlo"}).then(o=>{o.value&&this.fotoServices.borrarfoto(e).subscribe(r=>{this.ImagenesUser(),c().fire("Fotografia Borrada"," fue eliminado correctamente","success"),this.router.navigateByUrl("/dashboard/aboutme")})})}anularfoto(){const e=this.usuario.publicado;1==e&&(this.publicado=!0,console.log(e))}buscar(e){if(0===e.length)return this.ImagenesUser();this.busquedaService.buscarResultados("imagenes",e).subscribe(o=>{this.Image2=o})}publicar(e){this.usuarioService.publicarFoto(e).subscribe(o=>{this.ImagenesUser(),c().fire("Fotografia publicada"," Votaste Exitosamente","success"),this.router.navigateByUrl("/dashboard")})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.i),t.Y36(h),t.Y36(L),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-administracion"]],decls:9,vars:2,consts:[[1,"row","animated","fadeIn","fast"],[1,"col-12"],[1,"card"],[1,"card-body"],["type","text","placeholder","Buscar imagen por titulo",1,"form-control",3,"keyup"],["txtTermino",""],["class","row animated fadeIn fast",4,"ngIf"],[1,"alert","alert-info","text-center"],[1,"alert-heading"],[1,"fa","fa-spin","fa-refresh","fa-2x"],[1,"mb-0"],[1,"card-title"],[1,"card-subtitle"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"w140"],[1,"text-nowrap","w100"],[4,"ngFor","ngForOf"],[1,"btn","btn-secondary"],[1,"text-nowrap","text-center"],["type","button","data-bs-toggle","modal",1,"btn","btn-success","m-2"],["tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade",3,"id"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"card",2,"width","18rem"],["alt","...",1,"card-img-top",3,"src"],[1,"card-text"],["type","button",1,"btn","btn-primary","m-2",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"]],template:function(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"input",4,5),t.NdJ("keyup",function(){t.CHM(r);const p=t.MAs(5);return o.buscar(p.value)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,z,8,0,"div",6),t.TgZ(7,"div"),t.YNc(8,R,26,2,"div",6),t.qZA()}2&e&&(t.xp6(6),t.Q6J("ngIf",o.cargando),t.xp6(2),t.Q6J("ngIf",!o.cargando))},directives:[g.O5,g.sg],styles:[".mostrar[_ngcontent-%COMP%]{visibility:hidden}"]}),i})(),canActivate:[j]},{path:"selecciones/:id",component:D,data:{titulo:"Seleccion de Imagen"}}];let H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(E)],d.Bz]}),i})()}}]);