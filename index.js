function createBufferTree(avltreelib) {
  'use strict';

  var Node = avltreelib.Node;

  function buffercompare (a, b) {
    var isab = Buffer.isBuffer(a), isbb = Buffer.isBuffer(b);
    if (!isab) {
      if (!isbb) {
        return 0;
      }
      return -1;
    }
    if (!isbb) {
      return 1;
    }
    return Buffer.compare(a, b);
  }


  return avltreelib.treeFactory(buffercompare,function(content){
    return new Node(content);
  });
}

module.exports = createBufferTree;
