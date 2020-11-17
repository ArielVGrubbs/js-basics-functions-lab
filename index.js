// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let distance = block - 42
    if (distance < 0){
        distance = distance * -1
    }
    return distance
}

function distanceFromHqInFeet(blockf){
    let feet = distanceFromHqInBlocks(blockf) * 264
    return feet
}

function distanceTravelledInFeet(block1, block2){
    let blocks = block1 - block2
    if (blocks < 0){
        blocks = blocks * -1
    }
    let feet = blocks * 264
    return feet
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(destination, start) < 400){
        return 0
    } else if (distanceTravelledInFeet(destination, start) > 400 && distanceTravelledInFeet(destination, start) < 2000){
        let cost = (distanceTravelledInFeet(destination, start) - 400) * 0.02
        return cost
    } else if (distanceTravelledInFeet(destination, start) > 2000 && distanceTravelledInFeet(destination, start) < 2500){
        let cost = 25
        return cost
    } else {
        return 'cannot travel that far'
    }
}