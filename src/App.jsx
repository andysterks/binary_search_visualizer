import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './App.css'

function App() {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    const width = 400
    const height = 300

    // Clear any existing content
    svg.selectAll("*").remove()

    // Create a hierarchical data structure
    const data = {
      name: "Root",
      children: [
        { name: "Child 1" },
        { name: "Child 2" }
      ]
    }

    // Create a tree layout
    const treeLayout = d3.tree().size([width, height - 100])

    // Create a hierarchy from the data
    const root = d3.hierarchy(data)

    // Assign x and y positions to each node
    treeLayout(root)

    // Create links
    svg.selectAll('.link')
      .data(root.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y))

    // Create nodes
    const node = svg.selectAll('.node')
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

  }, [])

  return (
    <div className="App">
      <h1>D3.js Tree Visualization</h1>
      <svg ref={svgRef} width="400" height="300"></svg>
    </div>
  )
}

export default App
