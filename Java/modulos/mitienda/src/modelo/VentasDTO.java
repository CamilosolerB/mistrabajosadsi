/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author PC
 */
public class VentasDTO {
    private long cedula;
    private String nombre;
    private long codigo1;
    private long codigo2;
    private long codigo3;
    private double valorventa;
    private double iva;

    
        public VentasDTO(long cedula, String nombre, long codigo1, long codigo2, long codigo3, double valorventa, double iva) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.codigo1 = codigo1;
        this.codigo2 = codigo2;
        this.codigo3 = codigo3;
        this.valorventa = valorventa;
        this.iva = iva;
    }
    public VentasDTO(long cedula) {
        this.cedula = cedula;
    }

    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public long getCodigo1() {
        return codigo1;
    }

    public void setCodigo1(long codigo1) {
        this.codigo1 = codigo1;
    }

    public long getCodigo2() {
        return codigo2;
    }

    public void setCodigo2(long codigo2) {
        this.codigo2 = codigo2;
    }

    public long getCodigo3() {
        return codigo3;
    }

    public void setCodigo3(long codigo3) {
        this.codigo3 = codigo3;
    }

    public double getValorventa() {
        return valorventa;
    }

    public void setValorventa(double valorventa) {
        this.valorventa = valorventa;
    }

    public double getIva() {
        return iva;
    }

    public void setIva(double iva) {
        this.iva = iva;
    }


}
