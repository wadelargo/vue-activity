new Vue({
    el: '#app',
    data: {
        mathScore: 0,
        scienceScore: 0,
        dcScore: 0,
        noticeMessage: ''
    },
    methods: {
        increment(subject) {
            if(this[subject + 'Score'] < 100) {
            this[subject + 'Score']++;
            } else {
                alert('The subject score cannot exceed 100')
            }
        },
        decrement(subject) {
            if (this[subject + 'Score'] > 0) {
                this[subject + 'Score']--;
            } else {
                alert('The subject score cannot exceed less than 0')
            }
        },
        calculateAverage() {
            const total = this.mathScore + this.scienceScore + this.dcScore;
            const numberOfSubjects = 3;
            return (total / numberOfSubjects).toFixed(2);
        }
    }
});



