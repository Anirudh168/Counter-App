var count = document.getElementById('count');
var res=0;
function increment()
{
    res = res+1;
    count.textContent=res;
}
function decrement()
{
    if(res!=0)
    {
    res = res-1;
    count.textContent=res;
    }
}
function reset()
{
    res=0;
    count.textContent=res;
}