const reducer =(students= [] ,action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...students ,action.payload];

        case 'UPDATE':
        case 'LIKE':
            return students.map((student)=> student._id=== action.payload._id ? action.payload : student);

        case 'DELETE':
            return students.filter((student)=>student.id !== action.payload);
        default:
            return students;

    }
};

export default reducer;