/** Class representing a Tree. */
class Tree {
	/**
	 * Creates a Tree Object
	 * parentNode, children, parentName,level,position
	 * @param {json[]} json - array of json object with name and parent fields
	 */
	constructor(json) {
		this.nodeList = [];
		let nodeMap = {};

		// Create list of nodes and map them to their name.
		for (let index = 0; index < json.length; ++index) {
			this.nodeList.push(new Node(json[index].name, json[index].parent));
			nodeMap[json[index].name] = this.nodeList[index];
		}

		// Link children with their parents.
		this.nodeList.forEach(node => {
			if (node.parentName === "root") return;

			let parent = nodeMap[node.parentName];
			node.parentNode = parent;
			parent.addChild(node);
		});

		// Variable that holds the current row position for each column.
		this.positions = [];
	}

	/**
	 * Function that builds a tree from a list of nodes with parent refs.
	 */
	buildTree() {
		let root = this.nodeList.find(function(element) {
			return element.parentName === "root";
		});

		// Must assign levels first in order to populate the positions variable.
		this.assignLevel(root, 0);
		this.assignPosition(root, 0);
  }

	/**
	 * Simple recursive function that assign levels to each node.
	 * Sets the node's level then recurses if there are children.
	 */
	assignLevel(node, level) {
		node.level = level;

		if (node.children.length === 0) return;

		for (let index = 0; index < node.children.length; ++index)
			this.assignLevel(node.children[index], level + 1);
	}
	
	/**
	 * Recursive function that assign positions to each node.
	 */
	assignPosition(node, position) {
		// Increment the column's position so the next node knows where to start.
		node.position = this.positions[node.level]++;

		// If node is the first in the column, set the column's starting position
		// based on what the parent told it to start at.
		if (isNaN(node.position)) {
			this.positions[node.level] = position + 1;
			node.position = position;
		}

		if (node.children.length === 0) return;

		// Tell children where to start the column. Sometimes children know best
		// and know where to start based on the 'positions' variable.
		for (let index = 0; index < node.children.length; ++index)
			this.assignPosition(node.children[index], node.position);
	}

	/**
	 * Function that renders the tree.
	 * Creates, in this order, the svg, the lines, the circles, and the text.
	 * This ensures overlapping is in the correct order.
	 */
	renderTree() {
		let widthScaling = 250;
		let heightScaling = 125;
		let circleRadiusScaling = 22;
		let offset = 50;

		let svg = d3.select("body")
								.append("svg")
								.attr("width", 1200)
								.attr("height", 1200);

		this.nodeList.forEach(node => {
			node.children.forEach(child => {
				svg.append("line")
				   .attr("x1", node.level * widthScaling + offset)
				   .attr("y1", node.position * heightScaling + offset)
				   .attr("x2", child.level * widthScaling + offset)
				   .attr("y2", child.position * heightScaling + offset);
			});
		});

		svg.selectAll("circle")
			 .data(this.nodeList)
			 .enter()
			 .append("circle")
			 .attr("cx", d => { return d.level * widthScaling + offset; })
			 .attr("cy", d => { return d.position * heightScaling + offset; })
			 .attr("r", 2 * circleRadiusScaling);
			 
		svg.selectAll("text")
			 .data(this.nodeList)
			 .enter()
			 .append("text")
			 .text(d => { return d.name; })
			 .attr("class", "label")
			 .attr("x", d => { return d.level * widthScaling + offset; })
			 .attr("y", d => { return d.position * heightScaling + offset; });
  }

}
