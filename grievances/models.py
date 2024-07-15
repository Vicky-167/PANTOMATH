from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    mobile_number = models.CharField(max_length=15, unique=True)
    address = models.TextField()
    id_proof_type = models.CharField(max_length=50)
    id_proof = models.FileField(upload_to='id_proofs/')
    otp = models.CharField(max_length=6)
    is_verified = models.BooleanField(default=False)

class Grievance(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    grievance_text = models.TextField()
    grievance_audio = models.FileField(upload_to='audio_grievances/', null=True, blank=True)
    status = models.CharField(max_length=50, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
