function buildStory() {
 d3.json("/src/resources/battle-text/description.json").then(function(data) {
    console.log(data);
  });

  const data = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique turpis maximus neque pellentesque rhoncus. Suspendisse at vestibulum eros, vel auctor eros. Praesent fringilla consectetur odio non suscipit. Mauris et luctus dui. Nunc et imperdiet augue. Nam id lorem et felis laoreet pretium. In nec risus et nibh ultrices hendrerit eget non velit. Cras eros dui, hendrerit non lobortis ut, tristique id dolor. Quisque turpis nunc, ultrices eu fermentum ultrices, pulvinar eu mi. Etiam ultricies, nulla a malesuada tempor, sapien sapien auctor velit, sed lobortis nunc dui in nunc. Suspendisse ac varius nisl. Fusce viverra sapien id iaculis laoreet. Integer a felis id metus convallis consequat eu ac sapien.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique turpis maximus neque pellentesque rhoncus. Suspendisse at vestibulum eros, vel auctor eros. Praesent fringilla consectetur odio non suscipit. Mauris et luctus dui. Nunc et imperdiet augue. Nam id lorem et felis laoreet pretium. In nec risus et nibh ultrices hendrerit eget non velit. Cras eros dui, hendrerit non lobortis ut, tristique id dolor. Quisque turpis nunc, ultrices eu fermentum ultrices, pulvinar eu mi. Etiam ultricies, nulla a malesuada tempor, sapien sapien auctor velit, sed lobortis nunc dui in nunc. Suspendisse ac varius nisl. Fusce viverra sapien id iaculis laoreet. Integer a felis id metus convallis consequat eu ac sapien.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique turpis maximus neque pellentesque rhoncus. Suspendisse at vestibulum eros, vel auctor eros. Praesent fringilla consectetur odio non suscipit. Mauris et luctus dui. Nunc et imperdiet augue. Nam id lorem et felis laoreet pretium. In nec risus et nibh ultrices hendrerit eget non velit. Cras eros dui, hendrerit non lobortis ut, tristique id dolor. Quisque turpis nunc, ultrices eu fermentum ultrices, pulvinar eu mi. Etiam ultricies, nulla a malesuada tempor, sapien sapien auctor velit, sed lobortis nunc dui in nunc. Suspendisse ac varius nisl. Fusce viverra sapien id iaculis laoreet. Integer a felis id metus convallis consequat eu ac sapien.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique turpis maximus neque pellentesque rhoncus. Suspendisse at vestibulum eros, vel auctor eros. Praesent fringilla consectetur odio non suscipit. Mauris et luctus dui. Nunc et imperdiet augue. Nam id lorem et felis laoreet pretium. In nec risus et nibh ultrices hendrerit eget non velit. Cras eros dui, hendrerit non lobortis ut, tristique id dolor. Quisque turpis nunc, ultrices eu fermentum ultrices, pulvinar eu mi. Etiam ultricies, nulla a malesuada tempor, sapien sapien auctor velit, sed lobortis nunc dui in nunc. Suspendisse ac varius nisl. Fusce viverra sapien id iaculis laoreet. Integer a felis id metus convallis consequat eu ac sapien.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique turpis maximus neque pellentesque rhoncus. Suspendisse at vestibulum eros, vel auctor eros. Praesent fringilla consectetur odio non suscipit. Mauris et luctus dui. Nunc et imperdiet augue. Nam id lorem et felis laoreet pretium. In nec risus et nibh ultrices hendrerit eget non velit. Cras eros dui, hendrerit non lobortis ut, tristique id dolor. Quisque turpis nunc, ultrices eu fermentum ultrices, pulvinar eu mi. Etiam ultricies, nulla a malesuada tempor, sapien sapien auctor velit, sed lobortis nunc dui in nunc. Suspendisse ac varius nisl. Fusce viverra sapien id iaculis laoreet. Integer a felis id metus convallis consequat eu ac sapien.",
  ];

  const text = d3.select("#story")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("id", (_, i) => "battle-" + (i + 1));

  text.append("p")
    .attr("class", "h1")
    .text((_, i) => "Battle " + (i + 1))

  text.append("p")
    .attr("class", "h3")
    .text(d => d);
}
