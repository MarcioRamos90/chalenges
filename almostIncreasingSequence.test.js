const almostIncreasingSequence = require('./almostIncreasingSequence')

test('almostIncreasingSequence >>> tests', () => {
    expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(false)
    expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false)
    expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toBe(true)
    expect(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])).toBe(false)
    expect(almostIncreasingSequence([1, 1, 2, 3, 4, 4])).toBe(false)
    expect(almostIncreasingSequence([1, 4, 10, 4, 2])).toBe(false)
    expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toBe(false)
    
    expect(almostIncreasingSequence([1, 3, 2])).toBe(true)
    expect(almostIncreasingSequence([-9996, -9995, -9994, -9993, -9991, -9989, -9987, -9986, -9985, -9983, -9982, -9980, -9978, -9977, -9976, -9975, -9974, -9972, -9968, -9966, -9965, -9961, -9957, -9956, -9955, -9954, -9952, -9948, -9942, -9939, -9938, -9936, -9935, -9932, -9931, -9927, -9925, -9923, -9922, -9921, -9920, -9919, -9918, -9908, -9905, -9902, -9901, -9900, -9899, -9897, -9896, -9894, -9888, -9886, -9880, -9878, -9877, -9876, -9874, -9872, -9871, -9870, -9869, -9868, -9867, -9865, -9857, -9856, -9855, -9854, -9853, -9852, -9851, -9849, -9848, -9846, -9845, -9843, -9842, -9841, -9840, -9837, -9834, -9828, -9826, -9824, -9823, -9820, -9816, -9814, -9812, -9811, -9810, -9809, -9807, -9806, -9804, -9803, -9801, -9800])).toBe(true)
    expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toBe(true)
    

})

test('fdsfsd', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])).toBe(true)
    
})