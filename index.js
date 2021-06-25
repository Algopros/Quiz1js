function solution(A, L, R) {
    let leftNoDisks = [];
    let rightNoDisk = []
    
    for (i = 0; i < A.length; i++) {
        let disk =  A[i];
        let isOntheLeft = false;
        if (L > disk ){
            if (!leftNoDisks.includes(disk)) {
                isOntheLeft = true;
                leftNoDisks.push(disk)
            }
        }

        if (R < disk ){
            if (!rightNoDisk.includes(disk) && !isOntheLeft) {
                rightNoDisk.push(disk)
            }
        }
        
    }    
    let noOfDisks = leftNoDisks.concat(rightNoDisk)
    return noOfDisks.length;
}
