

function add(a,b)
{
    return parseInt(a)+parseInt(b);
}

function sub(a,b)
{
    return parseInt(a)-parseInt(b);
}

function mul(a,b)
{
    return parseInt(a)*parseInt(b);
}

function div(a,b)
{
    return parseInt(a)/parseInt(b);
}

function mod(a,b)
{
    return parseInt(a)%parseInt(b);
}

function pow(a,b)
{
    var p=1;
    for(i=0;i<parseInt(b);i++)
    {
        p*=parseInt(a);
    }
    return p;
}

module.exports=
{
    add,
    sub,
    mul,
    div,
    mod,
    pow
};