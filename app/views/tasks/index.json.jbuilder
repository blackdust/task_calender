json.array!(@tasks) do |task|
  json.extract! task, :id, :content, :date
  json.url task_url(task, format: :json)
end
