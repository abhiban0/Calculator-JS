
        function dis(val)
        {
            document.getElementById("main").value+= val;

        }
        
        function solve()
        {
    
            document.getElementById("main").value = eval(document.getElementById("main").value);
        }

        function clr()
        {
            document.getElementById("main").value = "";
        }