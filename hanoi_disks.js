
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, L, R) {
    // Sort the array in ascending order
    quickSort(A, 0, (A.length-1));

    // Get the max number of discs that can be placed on the two rods
    return maxDiscs(A, L, R);
}

function maxDiscs(array, L, R) {
    let numDiscs = 0, lTop = L, rTop = R, index = (array.length - 1);

    // Place numbers on the left rod
    // Check the values from highest to lowest index
    // Increment the max number of discs
    // Remove the number placed from the array
    while (index >= 0) {
        if (array[index] < lTop) {
            lTop = array[index];
            array.splice(index, 1);
            numDiscs++;
        }
        index--;
    }

    // Place numbers on the right rod
    // Read the values from lowest to highest index
    // Increment the max number of discs
    index = 0;
    while (index < array.length) {
        if (array[index] > rTop) {
            rTop = array[index];
            numDiscs++;
        }
        index++;
    }

    return numDiscs;
}

function quickSort(array, lowIndex, highIndex) {

	if (lowIndex < highIndex) {
		let pivotIndex = partition(array, lowIndex, highIndex);

		quickSort(array, lowIndex, pivotIndex - 1);
		quickSort(array, pivotIndex + 1, highIndex);
	}
}

function partition(array, lowIndex, highIndex) {

	// The pivot element to be placed at the right position
	let pivot = array[highIndex];

	// indicates right position of pivot found so far
	let index = lowIndex - 1; 

	for (let j = lowIndex; j < highIndex ; j++) {
		if (array[j] < pivot) {
			index++;
			swap(array, index, j);
		}
	}

	swap(array, (index+1), highIndex);

	return index+1;

}

function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

