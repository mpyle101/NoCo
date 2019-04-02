const subject = new Subject()

// Subscribe to the subject
subject.subscribe(data => console.log(data))

// Cause the subject to send data
subject.next("Shazzam");

/* Console result: Shazzam */