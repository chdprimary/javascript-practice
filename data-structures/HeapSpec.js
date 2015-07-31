describe("Heap", function() {
	var heap;
	var n1;

	beforeEach(function() {
		heap = new Heap();
		n1 = new Node(10);
		heap.insert(n1);
	});

	it("should not be empty after inserting", function() {
		expect(heap.isEmpty()).toEqual(false);
		expect(heap.arr.length).toEqual(2);
	});

	it("should be empty after removing a single element", function() {
		heap.extractMax();
		expect(heap.isEmpty()).toEqual(true);
		expect(heap.arr.length).toEqual(1);
	});
});