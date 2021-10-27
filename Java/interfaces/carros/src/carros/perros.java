
package carros;


public class perros extends javax.swing.JFrame {


    public perros() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        primerpuesto = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        Segundo = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        tercer = new javax.swing.JTextField();
        jToggleButton1 = new javax.swing.JToggleButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        Resultado = new javax.swing.JTextArea();
        jLabel1 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jLabel14 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();
        jLabel16 = new javax.swing.JLabel();
        jLabel17 = new javax.swing.JLabel();
        jLabel18 = new javax.swing.JLabel();
        jLabel19 = new javax.swing.JLabel();
        jLabel20 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        jLabel3.setText("Elija los puestos");

        jLabel4.setText("Primer puesto:");

        jLabel5.setText("Segundo puesto:");

        jLabel6.setText("Tercer puesto:");

        jToggleButton1.setText("Validar");
        jToggleButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jToggleButton1ActionPerformed(evt);
            }
        });

        Resultado.setColumns(20);
        Resultado.setRows(5);
        jScrollPane1.setViewportView(Resultado);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(jLabel3)
                                .addGap(69, 69, 69))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(jToggleButton1)
                                .addGap(101, 101, 101))))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 241, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                .addGroup(jPanel1Layout.createSequentialGroup()
                                    .addComponent(jLabel6)
                                    .addGap(18, 18, 18)
                                    .addComponent(tercer))
                                .addGroup(jPanel1Layout.createSequentialGroup()
                                    .addComponent(jLabel5)
                                    .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                    .addComponent(Segundo))
                                .addGroup(jPanel1Layout.createSequentialGroup()
                                    .addComponent(jLabel4)
                                    .addGap(18, 18, 18)
                                    .addComponent(primerpuesto, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE))))
                        .addContainerGap(19, Short.MAX_VALUE))))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel3)
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4)
                    .addComponent(primerpuesto, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(50, 50, 50)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel5)
                    .addComponent(Segundo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(37, 37, 37)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(tercer, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jToggleButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 106, Short.MAX_VALUE)
                .addContainerGap())
        );

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(770, 80, 270, 360));

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setText("Concurso nacional de perros");
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(370, 30, 340, -1));

        jLabel7.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\pitbull.jpg")); // NOI18N
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 90, 240, 120));

        jLabel8.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(255, 255, 255));
        jLabel8.setText("Rottwhiller: 4000000");
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(590, 270, 140, -1));

        jLabel9.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\bully.jpg")); // NOI18N
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 90, 200, 160));

        jLabel10.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(255, 255, 255));
        jLabel10.setText("Doberman: 5000000");
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 470, 190, -1));

        jLabel11.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\rotwhiler.jpg")); // NOI18N
        jLabel11.setText("jLabel11");
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(570, 70, 150, 190));

        jLabel12.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel12.setForeground(new java.awt.Color(255, 255, 255));
        jLabel12.setText("Bully: 6500000");
        getContentPane().add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 260, 110, -1));

        jLabel13.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\labrador.jpg")); // NOI18N
        getContentPane().add(jLabel13, new org.netbeans.lib.awtextra.AbsoluteConstraints(90, 270, 220, 140));

        jLabel14.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel14.setForeground(new java.awt.Color(255, 255, 255));
        jLabel14.setText("Pitbull:6000000");
        getContentPane().add(jLabel14, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 220, 120, -1));

        jLabel15.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\golden.jpg")); // NOI18N
        getContentPane().add(jLabel15, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 300, 200, 180));

        jLabel16.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel16.setForeground(new java.awt.Color(255, 255, 255));
        jLabel16.setText("Labrador retriever: 3500000");
        getContentPane().add(jLabel16, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 420, 190, -1));

        jLabel17.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\doberman.jpg")); // NOI18N
        jLabel17.setText("jLabel17");
        getContentPane().add(jLabel17, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 300, 190, 160));

        jLabel18.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel18.setForeground(new java.awt.Color(255, 255, 255));
        jLabel18.setText("Dogo argentino: 5500000");
        getContentPane().add(jLabel18, new org.netbeans.lib.awtextra.AbsoluteConstraints(530, 600, 190, -1));

        jLabel19.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel19.setForeground(new java.awt.Color(255, 255, 255));
        jLabel19.setText("Golden retriever: 3500000");
        getContentPane().add(jLabel19, new org.netbeans.lib.awtextra.AbsoluteConstraints(350, 490, 190, -1));

        jLabel20.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\fotosperros\\dogo.jpg")); // NOI18N
        getContentPane().add(jLabel20, new org.netbeans.lib.awtextra.AbsoluteConstraints(330, 520, 200, 190));

        jLabel2.setIcon(new javax.swing.ImageIcon("C:\\Users\\caans\\OneDrive\\Escritorio\\Adsi\\Java\\modulos\\carros\\fotos\\perros.jpg")); // NOI18N
        jLabel2.setText("jLabel2");
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1070, 730));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jToggleButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jToggleButton1ActionPerformed
        int V2=800000,V3=200000,V;
String P1,P2,P3,pi="Pitbull",bu="Buly",ro="Rotwhiller",la="Labrador",gr="Golden",dob="Doberman",dog="Dogo";

P1=primerpuesto.getText();
P2=Segundo.getText();
P3=tercer.getText();
    if(P1.equalsIgnoreCase(pi)){
        V=6000000*2;
        Resultado.setText("El "+P1+" gana "+V);
    }    
        else if(P1.equalsIgnoreCase(bu)){
            V=6500000*2;
            Resultado.setText("El "+P1+" gana "+V);
        }
            else if(P1.equalsIgnoreCase(ro)){
                V=4000000*2;
                Resultado.setText("El "+P1+" gana "+V);
            }
                else if(P1.equalsIgnoreCase(la)){
                    V=3500000*2;
                    Resultado.setText("El "+P1+" gana "+V);
                }
                    else if(P1.equalsIgnoreCase(gr)){
                        V=3500000*2;
                        Resultado.setText("El "+P1+" gana "+V);
                    }
                        else if(P1.equalsIgnoreCase(dob)){
                            V=5000000*2;
                            Resultado.setText("El "+P1+" gana "+V);
                        }
                            else if(P1.equalsIgnoreCase(dog)){
                                V=5500000*2;
                                Resultado.setText("El "+P1+" gana "+V);
                            }
                                else{
                                    Resultado.setText("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
if(P2.equalsIgnoreCase(pi)){
        V=6000000+V2;
        Resultado.setText("El "+P2+" gana "+V);
    }    
        else if(P2.equalsIgnoreCase(bu)){
            V=6500000+V2;
            Resultado.setText("El "+P2+" gana "+V);
        }
            else if(P2.equalsIgnoreCase(ro)){
                V=4000000+V2;
                Resultado.setText("El "+P2+" gana "+V);
            }
                else if(P2.equalsIgnoreCase(la)){
                    V=3500000+V2;
                    Resultado.setText("El "+P2+" gana "+V);
                }
                    else if(P2.equalsIgnoreCase(gr)){
                        V=3500000+V2;
                        Resultado.setText("El "+P2+" gana "+V);
                    }
                        else if(P2.equalsIgnoreCase(dob)){
                            V=5000000+V2;
                            Resultado.setText("El "+P2+" gana "+V);
                        }
                            else if(P2.equalsIgnoreCase(dog)){
                                V=5500000+V2;
                                Resultado.setText("El "+P2+" gana "+V);
                            }
                                else{
                                    Resultado.setText("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
if(P3.equalsIgnoreCase(pi)){
        V=6000000+V3;
        Resultado.setText("El "+P3+" gana "+V);
    }    
        else if(P3.equalsIgnoreCase(bu)){
            V=6500000+V3;
            Resultado.setText("El "+P3+" gana "+V);
        }
            else if(P3.equalsIgnoreCase(ro)){
                V=4000000+V3;
                Resultado.setText("El "+P3+" gana "+V);
            }
                else if(P3.equalsIgnoreCase(la)){
                    V=3500000+V3;
                    Resultado.setText("El "+P3+" gana "+V);
                }
                    else if(P3.equalsIgnoreCase(gr)){
                        V=3500000+V3;
                        Resultado.setText("El "+P3+" gana "+V);
                    }
                        else if(P3.equalsIgnoreCase(dob)){
                            V=5000000+V3;
                            Resultado.setText("El "+P3+" gana "+V);
                        }
                            else if(P3.equalsIgnoreCase(dog)){
                                V=5500000+V3;
                                Resultado.setText("El "+P3+" gana "+V);
                            }
                                else{
                                    Resultado.setText("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
    }//GEN-LAST:event_jToggleButton1ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(perros.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(perros.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(perros.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(perros.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new perros().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextArea Resultado;
    private javax.swing.JTextField Segundo;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel16;
    private javax.swing.JLabel jLabel17;
    private javax.swing.JLabel jLabel18;
    private javax.swing.JLabel jLabel19;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel20;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JToggleButton jToggleButton1;
    private javax.swing.JTextField primerpuesto;
    private javax.swing.JTextField tercer;
    // End of variables declaration//GEN-END:variables
}
