// 5. Now add 29. Is the tree balanced? If not, which rotation needs to be done? 
// (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

No. The tree is not balanced. A leftrotation(15) is necessary.

                                            
                          
                           30    
                         /    \
                        10     45
                       /  \    / \
                          15  40  50 
                            \  
                             20 
                              \
                              27
                                \
                                29


                                  30    
                                /    \
                               10     45
                              /  \    / \
                                 20  40  50 
                                /  \  
                               15   27 
                                     \
                                     29
                                       