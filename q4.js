// 4. Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation 
//    as an example: rightRotation(30), or leftRotation(10))

No. The tree is not balanced. A leftRotation(10) is needed.




                      10
                        \
                         30    
                       /    \
                      15     45
                     /  \   /  \
                        20 40   50
                       /  \
                          27

                          
                          
                           30    
                         /    \
                        10     45
                       /  \    / \
                          15  40  50 
                            \  
                             20 
                              \
                              27