document.body.onload=function(){
  nbr=10;
  p=0;
  container=document.getElementById("container");
  g=document.getElementById("g");
  d=document.getElementById("d");
  container.style.width=(300*nbr)+"px";

  for (i=1;i<=nbr;i++){

    div=document.createElement("div");
    div.className="photo";
    div.style.backgroundImage="url('data/im"+i+".jpg')";
    container.appendChild(div);
  }
  afiicherMasquer();
}
  d.onclick=function(){
    if (p>-nbr+1){
      p--;
    }
    container.style.transform="translate("+p*300+"px)";
    container.style.transition="all 0.5s ease";
    afiicherMasquer();
  }

  g.onclick=function(){
    if (p<0){
      p++;
    }
    container.style.transform="translate("+p*300+"px)";
    container.style.transition="all 0.5s ease";
    afiicherMasquer();
  }

  function afiicherMasquer() {
    if(p==-nbr+1)
      d.style.visibility="hidden";
    else
      d.style.visibility="visible";
    if(p==0)
      g.style.visibility="hidden";
    else
      g.style.visibility="visible";
  }
