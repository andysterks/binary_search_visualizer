import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import './App.css'
import  Node  from './Node'
import Insert from './functions/Insert'

function App() {
  const [rootNode, setRootNode] = useState(new Node(2, new Node(1), new Node(3)))
  const svgRef = useRef()

  const updateTree = (treeRootNode) => {
    const svg = d3.select(svgRef.current)
    const width = 400
    const height = 300

    // Clear any existing content
    svg.selectAll("*").remove()

    // Helper function to convert our Node structure to D3 hierarchy
    const convertToD3Hierarchy = (node) => {
      return {
        name: node.value,
        children: [
          node.left && convertToD3Hierarchy(node.left),
          node.right && convertToD3Hierarchy(node.right)
        ].filter(Boolean)
      }
    }

    // Convert our rootNode to D3 hierarchy
    const d3Data = convertToD3Hierarchy(treeRootNode)

    // Create a tree layout
    const treeLayout = d3.tree().size([width, height - 40])

    // Create a hierarchy from the converted data
    const root = d3.hierarchy(d3Data)

    // Assign x and y positions to each node
    treeLayout(root)

    // Create a group element to contain the entire tree
    const g = svg.append("g")
      .attr("transform", `translate(0, 20)`)

    // Create links
    g.selectAll('.link')
      .data(root.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y))

    // Create nodes
    const node = g.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`)

    node.append('circle')
      .attr('r', 10)

    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => d.children ? -12 : 12)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.name)
  }

  useEffect(() => {
    updateTree(rootNode)
  }, [rootNode])

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = Number(e.target.elements[0].value)
    var updatedRootNode = Insert(new Node(value), rootNode)
    setRootNode(updatedRootNode)
  }

  return (
    <div className="App">
      <h1>D3.js Tree Visualization</h1>
      <form onSubmit={handleSubmit}> 
        <input type="number" placeholder="Enter a number" />
        <button type="submit">Insert</button>
      </form>
      <svg ref={svgRef} width="400" height="300"></svg>
    </div>
  )
}

export default App