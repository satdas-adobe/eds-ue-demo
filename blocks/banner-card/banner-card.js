export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  block.append(ul);
}
