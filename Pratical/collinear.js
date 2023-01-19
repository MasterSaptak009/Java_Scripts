function collinear(x1,  y1,  x2, y2,  x3,  y3)
{
 
    // Calculation the area of
    // triangle. We have skipped
    // multiplication with 0.5
    // to avoid floating point
    // computations
    var a = x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2);
 
    if (a == 0)
        document.write("Yes");
    else
        document.write( "No");
}