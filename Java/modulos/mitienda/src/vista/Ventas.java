/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import controlador.ventas;
import java.awt.HeadlessException;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;


/**
 *
 * @author PC
 */
public class Ventas extends javax.swing.JFrame {
    
    ventas vent = new ventas(this);

    public Ventas(JTextField cedula1, JTextField codigo, JTextField codigo1, JTextField codigo2, JTextField codigo3, JButton jButton1, JButton jButton10, JButton jButton2, JButton jButton3, JButton jButton4, JButton jButton5, JButton jButton6, JButton jButton7, JButton jButton8, JButton jButton9, JLabel jLabel1, JLabel jLabel10, JLabel jLabel11, JLabel jLabel2, JLabel jLabel3, JLabel jLabel4, JLabel jLabel5, JLabel jLabel6, JLabel jLabel7, JLabel jLabel8, JLabel jLabel9, JPanel jPanel1, JTextField jTextField1, JTextField jTextField3, JTextField jTextField4, JTextField jTextField5, JTextField jTextField6, JTextField nombre, JTextField nombre1, JTextField nombre2, JTextField nombre3, JTextField total1, JTextField total2, JTextField total3, JTextField total4) throws HeadlessException {
        this.cedula1 = cedula1;
        this.codigo = codigo;
        this.codigo1 = codigo1;
        this.codigo2 = codigo2;
        this.codigo3 = codigo3;
        this.jButton1 = jButton1;
        this.jButton10 = jButton10;
        this.jButton2 = jButton2;
        this.jButton3 = jButton3;
        this.jButton4 = jButton4;
        this.jButton5 = jButton5;
        this.jButton6 = jButton6;
        this.jButton7 = jButton7;
        this.jButton8 = jButton8;
        this.jButton9 = jButton9;
        this.jLabel1 = jLabel1;
        this.jLabel10 = jLabel10;
        this.jLabel11 = jLabel11;
        this.jLabel2 = jLabel2;
        this.jLabel3 = jLabel3;
        this.jLabel4 = jLabel4;
        this.jLabel5 = jLabel5;
        this.jLabel6 = jLabel6;
        this.jLabel7 = jLabel7;
        this.jLabel8 = jLabel8;
        this.jLabel9 = jLabel9;
        this.jPanel1 = jPanel1;
        this.jTextField1 = jTextField1;
        this.jTextField3 = jTextField3;
        this.jTextField4 = jTextField4;
        this.jTextField5 = jTextField5;
        this.jTextField6 = jTextField6;
        this.nombre = nombre;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nombre3 = nombre3;
        this.total1 = total1;
        this.total2 = total2;
        this.total3 = total3;
        this.total4 = total4;
    }
    
    

    public JTextField getCedula1() {
        return cedula1;
    }

    public JTextField getCodigo() {
        return codigo;
    }

    public JTextField getCodigo1() {
        return codigo1;
    }

    public JTextField getCodigo2() {
        return codigo2;
    }

    public JTextField getCodigo3() {
        return codigo3;
    }

    public JTextField getjTextField1() {
        return jTextField1;
    }

    public JTextField getjTextField3() {
        return jTextField3;
    }

    public JTextField getjTextField4() {
        return jTextField4;
    }

    public JTextField getjTextField5() {
        return jTextField5;
    }

    public JTextField getjTextField6() {
        return jTextField6;
    }

    public JTextField getNombre() {
        return nombre;
    }

    public JTextField getNombre1() {
        return nombre1;
    }

    public JTextField getNombre2() {
        return nombre2;
    }

    public JTextField getNombre3() {
        return nombre3;
    }

    public JTextField getTotal1() {
        return total1;
    }

    public JTextField getTotal2() {
        return total2;
    }

    public JTextField getTotal3() {
        return total3;
    }

    public JTextField getTotal4() {
        return total4;
    }
    
    

    /**
     * Creates new form Ventas
     */
    public Ventas() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        codigo3 = new javax.swing.JTextField();
        jPanel1 = new javax.swing.JPanel();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        total2 = new javax.swing.JTextField();
        jButton6 = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        nombre = new javax.swing.JTextField();
        cedula1 = new javax.swing.JTextField();
        codigo1 = new javax.swing.JTextField();
        codigo2 = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        jButton7 = new javax.swing.JButton();
        jButton8 = new javax.swing.JButton();
        jButton9 = new javax.swing.JButton();
        nombre3 = new javax.swing.JTextField();
        nombre1 = new javax.swing.JTextField();
        nombre2 = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        jTextField1 = new javax.swing.JTextField();
        jTextField3 = new javax.swing.JTextField();
        jTextField4 = new javax.swing.JTextField();
        total1 = new javax.swing.JTextField();
        total3 = new javax.swing.JTextField();
        total4 = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jTextField5 = new javax.swing.JTextField();
        jTextField6 = new javax.swing.JTextField();
        jLabel11 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        codigo = new javax.swing.JTextField();
        jButton10 = new javax.swing.JButton();
        jButton11 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 255, 255));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());
        getContentPane().add(codigo3, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 270, 140, -1));

        jButton1.setText("Usuarios");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setText("Clientes");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jButton3.setText("Proveedores");
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        jButton4.setText("Productos");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });

        jButton5.setText("reportes");
        jButton5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton5ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addComponent(jButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton5)
                .addGap(0, 385, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jButton1, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE)
            .addComponent(jButton2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jButton3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jButton4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jButton5, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 800, 40));

        jLabel2.setText("Cedula");
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 60, -1, -1));
        getContentPane().add(total2, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 240, 110, -1));

        jButton6.setText("Consultar");
        getContentPane().add(jButton6, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 270, -1, -1));

        jLabel3.setText("Nombre");
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 60, -1, -1));
        getContentPane().add(nombre, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 60, 140, -1));

        cedula1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cedula1ActionPerformed(evt);
            }
        });
        getContentPane().add(cedula1, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 60, 140, -1));
        getContentPane().add(codigo1, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 210, 140, -1));
        getContentPane().add(codigo2, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 240, 140, -1));

        jLabel4.setText("Codigo producto");
        getContentPane().add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 190, 130, -1));

        jButton7.setText("Consultar");
        jButton7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton7ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton7, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 60, -1, -1));

        jButton8.setText("Consultar");
        getContentPane().add(jButton8, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 210, -1, -1));

        jButton9.setText("Consultar");
        getContentPane().add(jButton9, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 240, -1, -1));
        getContentPane().add(nombre3, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 270, 140, -1));
        getContentPane().add(nombre1, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 210, 140, -1));
        getContentPane().add(nombre2, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 240, 140, -1));

        jLabel5.setText("Nombre producto");
        getContentPane().add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 190, -1, -1));

        jTextField1.setText("0");
        getContentPane().add(jTextField1, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 270, 30, -1));

        jTextField3.setText("0");
        getContentPane().add(jTextField3, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 240, 30, -1));

        jTextField4.setText("0");
        getContentPane().add(jTextField4, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 210, 30, -1));
        getContentPane().add(total1, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 270, 110, -1));
        getContentPane().add(total3, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 310, 110, -1));
        getContentPane().add(total4, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 210, 110, -1));

        jLabel6.setText("Cantidad");
        getContentPane().add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 190, -1, -1));

        jLabel7.setText("Valor total");
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(570, 190, 110, -1));

        jLabel8.setText("Total venta");
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 310, 70, 20));
        getContentPane().add(jTextField5, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 360, 110, -1));
        getContentPane().add(jTextField6, new org.netbeans.lib.awtextra.AbsoluteConstraints(560, 400, 110, -1));

        jLabel11.setText("Codigo de venta");
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(510, 60, -1, -1));

        jLabel9.setText("Total Iva");
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(500, 360, -1, -1));

        jLabel10.setText("Total con iva");
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(470, 400, 70, -1));
        getContentPane().add(codigo, new org.netbeans.lib.awtextra.AbsoluteConstraints(600, 60, 120, -1));

        jButton10.setBackground(new java.awt.Color(0, 240, 0));
        jButton10.setText("Vender");
        jButton10.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton10ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton10, new org.netbeans.lib.awtextra.AbsoluteConstraints(680, 120, 90, 100));

        jButton11.setText("Calcular valor");
        getContentPane().add(jButton11, new org.netbeans.lib.awtextra.AbsoluteConstraints(690, 270, -1, -1));

        jLabel1.setBackground(new java.awt.Color(255, 255, 255));
        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/vista/ventas.jpg"))); // NOI18N
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 50, 740, 430));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        insertusu usu = new insertusu();
        usu.setVisible(true);
        usu.setLocationRelativeTo(null);
        usu.setTitle("Usuarios");
        this.setVisible(false);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        viscli cli = new viscli();
        cli.setVisible(true);
        this.setVisible(false);
        cli.setTitle("Clientes");
        cli.setLocationRelativeTo(null);
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        proveedores pro = new proveedores();
        pro.setVisible(true);
        pro.setTitle("Proveedores");
        pro.setLocationRelativeTo(null);
        this.setVisible(false);
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        productos pro = new productos();
        pro.setVisible(true);
        pro.setTitle("Proveedores");
        pro.setLocationRelativeTo(null);
        this.setVisible(false);
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jButton10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton10ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton10ActionPerformed

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
                reportes rep = new reportes();
        rep.setVisible(true);
        rep.setTitle("Reportes");
        this.setVisible(false);
        rep.setLocationRelativeTo(null);
    }//GEN-LAST:event_jButton5ActionPerformed

    private void cedula1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cedula1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_cedula1ActionPerformed

    private void jButton7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
        vent.consultar();
    }//GEN-LAST:event_jButton7ActionPerformed

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
            java.util.logging.Logger.getLogger(Ventas.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Ventas.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Ventas.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Ventas.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Ventas().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField cedula1;
    private javax.swing.JTextField codigo;
    private javax.swing.JTextField codigo1;
    private javax.swing.JTextField codigo2;
    private javax.swing.JTextField codigo3;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton10;
    private javax.swing.JButton jButton11;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JButton jButton6;
    private javax.swing.JButton jButton7;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField jTextField1;
    private javax.swing.JTextField jTextField3;
    private javax.swing.JTextField jTextField4;
    private javax.swing.JTextField jTextField5;
    private javax.swing.JTextField jTextField6;
    private javax.swing.JTextField nombre;
    private javax.swing.JTextField nombre1;
    private javax.swing.JTextField nombre2;
    private javax.swing.JTextField nombre3;
    private javax.swing.JTextField total1;
    private javax.swing.JTextField total2;
    private javax.swing.JTextField total3;
    private javax.swing.JTextField total4;
    // End of variables declaration//GEN-END:variables
}
