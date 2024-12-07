package com.example.vinfast.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChangePassDTO {
    private String oldPassword;
    private String newPassword;
    private String renewPassword;
}
