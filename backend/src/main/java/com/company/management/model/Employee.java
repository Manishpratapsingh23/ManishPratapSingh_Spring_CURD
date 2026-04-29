package com.company.management.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Employee {
    @JsonProperty("id")
    private Integer id;
    
    @JsonProperty("fullName")
    private String fullName;
    
    @JsonProperty("contactEmail")
    private String contactEmail;
    
    @JsonProperty("department")
    private String department;

    public Employee() {
    }

    public Employee(Integer id, String fullName, String contactEmail, String department) {
        this.id = id;
        this.fullName = fullName;
        this.contactEmail = contactEmail;
        this.department = department;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
