<?php
class InterviewerModel extends Model
{
    public function createInterviewer($data)
    {
        return $this->create('interviewers', $data);
    }
    public function readInterviewers($id)
    {
        return $this->read('interviewers', empty($id) ? '' : "id=$id"); 
    }
    public function updateInterviewer($id, $data)
    {
        return $this->update('interviewers', $data, "interview_id=$id");
    }
    public function deleteInterviewer($id)
    {
        return $this->delete("interviewers", "interview_id=$id");
    }
}