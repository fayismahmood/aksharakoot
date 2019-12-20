///Arrays
var fonts="AnjaliOldLipi,Chilanka,Dyuthi-Regular,Gayathri-Bold,Karumbi-Regular,Keraleeyam-Regular,Lohit-Malayalam,Manjari-Bold,Manjari-Regular,Meera-Regular,Rachana-Bold,Rachana-Regular,RaghuMalayalamSans-Regular,Samyak-Malayalam,Suruma,Uroob-Regular,NotoSansMalayalam-Bold,NotoSansMalayalam-Regular,NotoSerifMalayalam-Bold,NotoSerifMalayalam-Regular";
var num="px,%";
var border="solid,dashed"
var Shadow=" ,inset"
$(document).ready(f=>{
	dia('<div class="opdiv">'+
	'<div>Link css to access unicode fonts </div>'+
	'<center>'+
	'<div>Link css to access unicode fonts </div></center>'+
	'</div>')
    $(".adder>button").click(function(){
    	var item=$(this).attr("data");
    	var inner=$(this).attr("inner");
    	var tag=$(this).attr("tag");

    	if(tag=="op"){
    		$(".focus>*:not('.node')").append('<'+item+' contenteditable="true">'+inner+'</'+item+'>')
    	}else{
			if(item=="img"){
				$(".focus>*:not('.node')").append('<'+item+' src="dfadsfdsasdf" />')
			}
    		
		}
		
        
    })

function wrap(x,y){
	$(".focus").css('height',x)
	$(".focus").css('width',y)
}
	$(document).on("click","#conte *",function(e){
		e.stopPropagation();
		if($(this).parent().attr("class")=="focus"){}else{
			
			var cont=$(this)

			$(".focus>*").unwrap()
			$(".node").each(function (a,b){
				$(b).remove()
			})

			$(this).wrap("<section class='focus'></section>")


			$(".focus").css('display',$(this).css('display'))
			$(".focus").css('float',$(this).css('float'))

			wrap($(this).outerHeight(true),$(this).outerWidth(true))
			
			$(".focus").append("<div style='bottom:calc(0px - 4px); left:calc("+$(this).outerWidth(true)/2+"px - 4px);' class='node ver'></div>")
			$(".focus").append("<div style='right:calc(0px - 4px); bottom:calc("+$(this).outerHeight(true)/2+"px - 4px);' class='node hor'></div>")

			var click="a";
			var clickWid=0;
			var x=0;

			$(document).on("mousedown",".node.hor",function(e){
				 click="b";
				 clickWid=$(".focus>*:not('.node')").css("width")
				 x=e.clientX;
			})
			$(document).on("mousedown",".node.ver",function(e){
				click="c";
				clickWid=$(".focus>*:not('.node')").css("width")
				x=e.clientX;
		   })

			$(document).on("mouseup","body",function(){
				click="a";

		   })
			$("body").mousemove((e)=>{
				if(click=="b"){
					var fCon=$(".focus>*:not('.node')");
					var thex=e.clientX;
					var paddingh=Number(fCon.css("padding-right").replace("px",""))+Number(fCon.css("padding-left").replace("px",""))
					var w=thex-document.querySelector(".focus").getBoundingClientRect().x-paddingh;
					
					$("[data=width]").val(w)	
					$("[data=width]").change()
					wrap(fCon.outerHeight(true),fCon.outerWidth(true))
				}

				if(click=="c"){
					var fCon=$(".focus>*:not('.node')");
					var they=e.clientY;
					var paddingv=Number(fCon.css("padding-top").replace("px",""))+Number(fCon.css("padding-bottom").replace("px",""))
					var w=they-document.querySelector(".focus").getBoundingClientRect().y-paddingv;;
					console.log(w+"_"+th);
					
					$("[data=height]").val(w)	
					$("[data=height]").change()
					wrap(fCon.outerHeight(true),fCon.outerWidth(true))
				}
				
			})

		}
		
		$("input").on("keyup change",function(){
			wrap($('[data=height]').val(),$('[data=width]').val())
		})
		var th=$(this);

        var texdata=["font-family","font-weight","src"]
		texdata.forEach(e=>{
			$("[data="+e+"]").val(th.css(e))
		})

		

		var numdata=["height","width","font-size","padding","margin","line-height","border-radius"]
		numdata.forEach(e=>{
			var val=th.css(e);
			
			$("[data="+e+"]").val(val.match(/\d*/)[0])
			$("[data="+e+"]").parent().find("button").html("px")
		})

		var txtcmdata=["border","box-shadow","text-shadow"]
		txtcmdata.forEach(e=>{
			var val=th.css(e);
			$("[data="+e+"] [type=range]").each(function (a,b){
				$(b).val(0)
			})

		})

		var texAttrdata=["src"]
		texdata.forEach(e=>{
			$("[Attrdata="+e+"]").val(th.attr(e))
		})

		var coldata=["color","background-color"]
		coldata.forEach(e=>{
			var HexCol=RGBToHex(th.css(e));
			$("[data="+e+"]").css("background-color",HexCol)	
		})

		var coludata=["text-align","float"]
		coludata.forEach(e=>{
			th.css(e);
			$("[datatype="+e+"]").removeClass("ed")
			$("[data="+th.css(e)+"]").addClass("ed")	
		})
	})


	$("[mod=attr]").change(function(){
		var val=$(this).val();
		var item=$(this).attr("Attrdata");
		$(".focus>*:not('.node')").attr(item,val);
	
	})

	$(document).on("change keyup","[mod=txtWSuf]",function(){
		var val=$(this).val();
		val=$(this).attr("suf").replace("Suf",val)
		var item=$(this).attr("data");
		$(".focus>*:not('.node')").css(item,val);
	
	})
	
	$("[mod=txtcm] *").on("keyup change",function(){
		var val="";
		var item=$(this).attr("cdata");
		var vald=$(this).parent().find("*");

		vald.each(function(e,u){
			if($(u).attr("type")=="range"){
				val=val+' '+$(u).val()+"px";
			}else{
			if($(u).val()){
				val=val+' '+$(u).val()
			}
			if($(u).html()){
				val=val+' '+$(u).html()
			}}
		})
		$(".focus>*:not('.node')").css(item,val);
	
			$(this).parent().find("button").click(function(){
					var sel_data=$(this).attr("cdata");
					var Arr=eval(sel_data).split(",");
					var slWidth=$(this).css("width");
					$(this).after('<div style="" class="slb"></div>')
					
					var slbd=""
					Arr.forEach(e=>{
						slbd=slbd+'<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>'
					})
					$(".slb").html(slbd)

					var btn=$(this)
					$(".opt").click(function(){
						var html=$(this).find("span").html();
						btn.html(html)
					})
					outerClick($(this))
					})
	})

	$("[mod=txtcm]").each(function(e,u){

		var pickere = new CP(document.querySelector('[data='+$(u).attr("data")+']').querySelector('[mod=Ccol]'));
		
		console.log($(u).attr("data"))
		pickere.on("change", function(color) {
			$('[data='+$(u).attr("data")+'] [mod=Ccol]').val('#' + color) 
			$('[data='+$(u).attr("data")+'] [mod=Ccol]').change() 
		});
	})

	$(document).on("change keyup","[mod=txt][type=number]",(function(){
		var val=$(this).val()+$(this).parent().find("button").html();
		var item=$(this).attr("data");
		$(".focus>*:not('.node')").css(item,val)
	}))
    $(".small button").click(function(){
		Arr=num.split(",")
		var slWidth=$(this).css("width");
		$(this).after('<div style="" class="slb"></div>')
		
		Arr.forEach(e=>{
			$(".slb").append('<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>')
		})
		var btn=$(this)
		$(".opt").click(function(){
			var html=$(this).find("span").html();
			btn.html(html)
		})
		outerClick($(this))
	})

	$(document).on("change keyup","[mod=txt][type=text]",(function(){
		var val=$(this).val();
		var item=$(this).attr("data");
		$(".focus>*:not('.node')").css(item,val)
	}))
    
	$(document).on("change keyup","[mod=txt][type=range]",(function(){
		var val=$(this).val();
		var item=$(this).attr("data");
		$(".focus>*:not('.node')").css(item,val)
	}))


	$("[mod=tgB]").click(function(){
		var datatype=$(this).attr("datatype");
		var data=$(this).attr("data");
		$(".ed").removeClass("ed")
		$(this).addClass("ed");
		$(".focus>*:not('.node')").css(datatype,data)
	
	})


    $("[mod=sel]").click(function(){
		var val=$(this).val();
		var sel_data=$(this).attr("sel-data");

		var Arr=eval(sel_data).split(",");
		var slWidth=$(this).css("width");
		$(this).after('<div style="width:calc('+slWidth+' +17px);"  class="slb"></div>')
		
		Arr.forEach(e=>{
			$(".slb").append('<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>')
		})

		$(".opt").click(function(){
			var html=$(this).html();
			
		})
		
		var th=$(this)
		var item=$(this).attr("data");
		$(document).on("click",".opt",function(){
			var html=$(this).find("span").html();
			th.val(html)
			$(".focus>*:not('.node')").css(item,html)
			$(".slb").remove();
		})
		

		outerClick($(this))
		
	})

	$("[mod=col]").click(function(){
		var da=$(this).attr("data");
		var th=$(this)

	var picker = new CP(document.querySelector('[data='+da+']'));

	picker.on("change", function(color) {
		th.css("background-color",'#' + color)  
		$(".focus>*:not('.node')").css(da, '#' + color)
	});

	})
	
	
})


///RemoveDigWhenClickAtDoc////
function outerClick(select){
    $(document).on("click",(e)=>{
        var container = $(select).parent();
        
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
               container.find(".slb").remove();
               
			}
			
        })

}







function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function conte(){
	$(".focus>*:not('.node')").unwrap()
	$(".node").each(function (a,b){
				$(b).remove()
			})

	var cont=$('#conte>div').html();
	cont=cont.replace(/contenteditable="true"/g,"");
	$(".code>textarea").text(cont)
}


function dia(cont){
	$("body").append('<div id="dia">'+cont+'<button style="float:right;" onclick="diaClose()"><i class="icofont-ui-close"></i></button></div>')
	$("body").css("overflow","hidden")

}
function diaClose(){
	$("#dia").remove();
	$("body").css("overflow","auto")
}

function txtafter(c,e){
	c.next().attr("type","text")
	c.next().val(e);
	c.next().keyup()
	c.next().attr("type","number");

	var val=$(".focus>*:not('.node')").css(c.next().attr("data"));
	c.next().val(val.match(/\d*/)[0])
	
}
function toolb(t,b){
	if(b.hasClass("cli")){
		$(t+".hi").removeClass("vi")
		b.removeClass("cli")
	}else{
		$(".hi").removeClass("vi");
		$(t+".hi").toggleClass("vi")

		$(".header div").removeClass("cli")
		b.addClass("cli")

	}

	$(".codeS").click(function(){
		conte()
	})
	
	
}