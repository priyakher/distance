var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------    
    return (Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y))) ;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------

   data.forEach(function(ele){  ele.distance= exercise.distance(newPoint,ele);});
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------

   data.sort(function(a, b){return a.distance - b.distance});

   var result=[];

   for(var i=0;i<k;i++)
    result[i]=data[i]

    return result;    
};

module.exports = exercise;
