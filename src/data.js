export const Comment = ({
    name: [ { type: String, default: 'AAA' }, { type: String, default: 'BBB' } ],
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
});